<?php

/** @var \TYPO3\Surf\Domain\Model\Deployment $deployment */

/**
 * Include config
 */
$deploymentConfigPathAndFilename = __DIR__ . '/ProductionDeployment/config.php';
if (!file_exists($deploymentConfigPathAndFilename)) {
    exit(sprintf("The deployment config file %s does not exist.\n", $deploymentConfigPathAndFilename));
}
require_once($deploymentConfigPathAndFilename);

/**
 * Create Application
 */
$application = new \TYPO3\Surf\Application\BaseApplication($applicationName);
$application->setOption('repositoryUrl', $repositoryUrl);
$application->setOption('rsyncExcludes', ['.git', '.sass-cache', 'Build']);
$application->setOption('branch', $branch);
$application->setDeploymentPath($deploymentPath);
$node = new \TYPO3\Surf\Domain\Model\Node($host);
$node->setHostname($hostname);
$node->setOption('port', $port);
$node->setOption('username', $username);
$application->addNode($node);
$deployment->addApplication($application);

/**
 * Create workflow
 */
$workflow = new \TYPO3\Surf\Domain\Model\SimpleWorkflow();
$deployment->setWorkflow($workflow);

/**
 * Compile CSS
 */
$compilecssOptions = [
    'command' => '
		cd {workspacePath} &&
		BUNDLE_GEMFILE=typo3conf/ext/bgm_theme_bgm/Resources/Private/Gemfile bundle install &&
		BUNDLE_GEMFILE=typo3conf/ext/bgm_theme_bgm/Resources/Private/Gemfile bundle exec compass compile typo3conf/ext/bgm_theme_bgm/Resources/Private/ --force;',
];
$workflow->defineTask('compilecss', 'TYPO3\\Surf\\Task\\LocalShellTask', $compilecssOptions);
$workflow->afterStage('package', 'compilecss');

/**
 * Set release identifier file
 */
$setreleaseidentifierfileOptions = array(
    'command' => '
		echo ' . escapeshellarg('<?php echo "DeploymentName: ' . $deploymentName . '; ReleaseIdentifier: ' . $deployment->getReleaseIdentifier() . ';' . (getenv('CI_BUILD_ID') ? ' CI_BUILD_ID: ' . getenv('CI_BUILD_ID') . ';' : '') . '"; ?>') . ' > {workspacePath}/' . escapeshellarg('ReleaseIdentifier_' . $deployment->getReleaseIdentifier()) . '.php',
);
$workflow->defineTask('setreleaseidentifierfile', 'TYPO3\\Surf\\Task\\LocalShellTask', $setreleaseidentifierfileOptions);
$workflow->afterStage('package', 'setreleaseidentifierfile');

/**
 * Set AdditionalConfiguration.php
 *
 * AdditionalConfiguration.php has to exist and has to contain at least "<?php if (!defined ('TYPO3_MODE')) die('Access denied.'); ?>"
 */
$setadditionalconfigurationOptions = array(
    'command' => '
		echo ' . escapeshellarg(file_get_contents(__DIR__ . '/ProductionDeployment/AdditionalConfiguration.php')) . ' > {workspacePath}/typo3conf/AdditionalConfiguration.php',
);
$workflow->defineTask('setadditionalconfiguration', 'TYPO3\\Surf\\Task\\LocalShellTask', $setadditionalconfigurationOptions);
$workflow->afterStage('package', 'setadditionalconfiguration');

/**
 * Set iniset.php
 *
 * iniset.php has to exist and has to contain at least "<?php  ?>"
 */
$setinisetOptions = array(
    'command' => '
		echo ' . escapeshellarg(file_get_contents(__DIR__ . '/ProductionDeployment/iniset.php')) . ' > {releasePath}/typo3conf/iniset.php;
		echo ' . escapeshellarg(file_get_contents(__DIR__ . '/ProductionDeployment/iniset.php')) . ' > {currentPath}/typo3conf/iniset.php',
    'rollbackCommand' => '
		rm -f {currentPath}/typo3conf/iniset.php',
);
$workflow->defineTask('setiniset', 'TYPO3\\Surf\\Task\\ShellTask', $setinisetOptions);
$workflow->addTask('setiniset', 'transfer');

/**
 * Set symlinks to typo3_src
 */
$setsymlinkstypo3srcOptions = array(
    'command' => '
		ln -s ' . escapeshellarg($typo3srcPath) . ' {releasePath}/typo3_src',
);
$workflow->defineTask('setsymlinkstypo3src', 'TYPO3\\Surf\\Task\\ShellTask', $setsymlinkstypo3srcOptions);
$workflow->addTask('setsymlinkstypo3src', 'transfer');

/**
 * Set symlinks to shared files
 */
$setsymlinksfilesOptions = array(
    'command' => '
		ln -s ' . escapeshellarg($filesPath) . ' {releasePath}/files',
);
$workflow->defineTask('setsymlinksfiles', 'TYPO3\\Surf\\Task\\ShellTask', $setsymlinksfilesOptions);
$workflow->addTask('setsymlinksfiles', 'transfer');

/**
 * Create missing directories and warmup autoload
 */
$createmissingdirectoriesOptions = array(
    'command' => '
		mkdir {releasePath}/typo3temp &&
		mkdir {releasePath}/typo3temp_local &&
		/usr/local/php705/bin/php {releasePath}/typo3cms install:fixfolderstructure &&
		/usr/local/php705/bin/php {releasePath}/typo3cms extension:dumpautoload',
);
$workflow->defineTask('createmissingdirectories', 'TYPO3\\Surf\\Task\\ShellTask', $createmissingdirectoriesOptions);
$workflow->addTask('createmissingdirectories', 'update');

/**
 * Set backend lock
 */
$setbackendlockOptions = array(
    'command' => '
		/usr/local/php705/bin/php {releasePath}/typo3cms backend:lock &&
		/usr/local/php705/bin/php {currentPath}/typo3cms backend:lock',
    'rollbackCommand' => '
		/usr/local/php705/bin/php {releasePath}/typo3cms backend:unlock;
		/usr/local/php705/bin/php {currentPath}/typo3cms backend:unlock;
		true',
);
$workflow->defineTask('setbackendlock', 'TYPO3\\Surf\\Task\\ShellTask', $setbackendlockOptions);
$workflow->addTask('setbackendlock', 'migrate');

/**
 * Do database backup
 */
$dodatabasebackupOptions = array(
    'command' => '
		/usr/local/php705/bin/php {currentPath}/typo3cms database:export > {currentPath}/deploymentbackup.sql',
    'rollbackCommand' => '
		/usr/local/php705/bin/php {currentPath}/typo3cms database:import < {currentPath}/deploymentbackup.sql &&
		rm -f {currentPath}/deploymentbackup.sql;
		true',
);
$workflow->defineTask('dodatabasebackup', 'TYPO3\\Surf\\Task\\ShellTask', $dodatabasebackupOptions);
$workflow->addTask('dodatabasebackup', 'migrate');

/**
 * Do database compare
 *
 * @see https://docs.typo3.org/typo3cms/extensions/typo3_console/CommandReference/Index.html#database-updateschema
 */
$dodatabasecompareOptions = array(
    'command' => '
		/usr/local/php705/bin/php {releasePath}/typo3cms cache:flush --force &&
		/usr/local/php705/bin/php {releasePath}/typo3cms database:updateschema safe',
    'rollbackCommand' => '
		/usr/local/php705/bin/php {currentPath}/typo3cms cache:flush --force;
		/usr/local/php705/bin/php {currentPath}/typo3cms database:updateschema safe;
		true',
);
$workflow->defineTask('dodatabasecompare', 'TYPO3\\Surf\\Task\\ShellTask', $dodatabasecompareOptions);
$workflow->addTask('dodatabasecompare', 'migrate');

/**
 * Symlink shared typo3temp in releasePath
 */
$copytempassetsOptions = array(
    'command' => '
		rm -rf {releasePath}/typo3temp &&
		ln -s {releasePath}/files/typo3temp {releasePath}/typo3temp',
);
$workflow->defineTask('copytempassets', 'TYPO3\\Surf\\Task\\ShellTask', $copytempassetsOptions);
$workflow->addTask('copytempassets', 'finalize');

/**
 * Clear caches
 */
$clearcacheOptions = array(
    'command' => '
		/usr/local/php705/bin/php {releasePath}/typo3cms cache:flush --force &&
		/usr/local/php705/bin/php {releasePath}/typo3cms extension:dumpautoload',
);
$workflow->defineTask('clearcache', 'TYPO3\\Surf\\Task\\ShellTask', $clearcacheOptions);
$workflow->afterStage('switch', 'clearcache');

/**
 * Fix file permissions
 */
$fixfilepermissionsOptions = array(
    'command' => '
		chmod -R g+w {releasePath}/typo3temp*;
		true',
);
$workflow->defineTask('fixfilepermissions', 'TYPO3\\Surf\\Task\\ShellTask', $fixfilepermissionsOptions);
$workflow->afterStage('switch', 'fixfilepermissions');

/**
 * Remove backend locks
 */
$removebackendlockOptions = array(
    'command' => '
		/usr/local/php705/bin/php {currentPath}/typo3cms backend:unlock'
);
$workflow->defineTask('removebackendlock', 'TYPO3\\Surf\\Task\\ShellTask', $removebackendlockOptions);
$workflow->addTask('removebackendlock', 'cleanup');

/**
 * Remove iniset.php
 */
$removeinisetOptions = array(
    'command' => '
		rm -f {currentPath}/typo3conf/iniset.php &&
		rm -f {previousPath}/typo3conf/iniset.php',
);
$workflow->defineTask('removeiniset', 'TYPO3\\Surf\\Task\\ShellTask', $removeinisetOptions);
$workflow->addTask('removeiniset', 'cleanup');

/**
 * Set git tag
 */
$settagOptions = [
    'command' => '
		git tag -f -a -m ' . escapeshellarg('DeploymentName: ' . $deploymentName . '; ReleaseIdentifier: ' . $deployment->getReleaseIdentifier() . ';' . (getenv('CI_BUILD_ID') ? ' CI_BUILD_ID: ' . getenv('CI_BUILD_ID') . ';' : '')) . ' ' . escapeshellarg($deploymentName . '-' . $deployment->getReleaseIdentifier() . (getenv('CI_BUILD_ID') ? '-' . getenv('CI_BUILD_ID') : '')) . ' && 
		git push origin ' . escapeshellarg($deploymentName . '-' . $deployment->getReleaseIdentifier() . (getenv('CI_BUILD_ID') ? '-' . getenv('CI_BUILD_ID') : '')),
];
$workflow->defineTask('settag', 'TYPO3\\Surf\\Task\\LocalShellTask', $settagOptions);
$workflow->addTask('settag', 'cleanup');

/**
 * Compress database backup
 */
$compressdatabasebackupOptions = array(
    'command' => '
		tar czf {previousPath}/deploymentbackup.sql.tar.gz {previousPath}/deploymentbackup.sql &&
		rm {previousPath}/deploymentbackup.sql',
);
$workflow->defineTask('compressdatabasebackup', 'TYPO3\\Surf\\Task\\ShellTask', $compressdatabasebackupOptions);
$workflow->addTask('compressdatabasebackup', 'cleanup');

/**
 * Delete all releases older than 6 days, but keeps at least 5 releases
 */
$deleteoldreleasesOptions = array(
    'command' => '
		ls -At1 --ignore=previous --ignore=current --ignore=next {deploymentPath}/releases/ | tail -n +5 | xargs -n1 basename|xargs -n1 -I{} find {deploymentPath}/releases/ -name {} -type d -mtime +6 | xargs -r rm -rf',
);
$workflow->defineTask('deleteoldreleases', 'TYPO3\\Surf\\Task\\ShellTask', $deleteoldreleasesOptions);
$workflow->addTask('deleteoldreleases', 'cleanup');
