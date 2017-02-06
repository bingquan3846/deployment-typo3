<?php
$node = new \TYPO3\Surf\Domain\Model\Node('example');
$node->setHostname('localhost');
$node->setOption('username', 'vagrant');

$application = new \TYPO3\Surf\Application\TYPO3\CMS();
$application->setDeploymentPath('/var/www/html/surf');
$application->setOption('repositoryUrl', 'https://github.com/bingquan3846/deployment-typo3.git');
$application->setOption('webDirectory', '');
$application->addNode($node);

$deployment->addApplication($application);

$workflow = new \TYPO3\Surf\Domain\Model\SimpleWorkflow();
$deployment->setWorkflow($workflow);

/**
- * Set symlinks to typo3_src
- */
$setsymlinkstypo3srcOptions = array(
    'command' => '
                ln -s /var/www/html/typo3_src-7.6.15  {releasePath}/typo3_src',
);
$workflow->defineTask('setsymlinkstypo3src', 'TYPO3\\Surf\\Task\\ShellTask', $setsymlinkstypo3srcOptions);
$workflow->addTask('setsymlinkstypo3src', 'transfer');

/**
 * set additionalConfiguration to overrite the database configuration
 */
$setadditionalconfigurationOptions = array(
    'command' => '
           echo ' . escapeshellarg(file_get_contents(__DIR__ . '/Surf/Production/AdditionalConfiguration.php')) . '  > {workspacePath}/typo3conf/AdditionalConfiguration.php',
);
$workflow->defineTask('setadditionalconfiguration', 'TYPO3\\Surf\\Task\\LocalShellTask', $setadditionalconfigurationOptions);
$workflow->afterStage('package', 'setadditionalconfiguration');

/**
 * Do database compare
 *
 * @see https://docs.typo3.org/typo3cms/extensions/typo3_console/CommandReference/Index.html#database-updateschema
 */
$dodatabasecompareOptions = array(
    'command' => '
 		/usr/bin/php {releasePath}/typo3cms cache:flush --force &&
 		/usr/bin/php {releasePath}/typo3cms database:updateschema safe',
    'rollbackCommand' => '
 		/usr/bin/php {currentPath}/typo3cms cache:flush --force;
 		/usr/bin/php {currentPath}/typo3cms database:updateschema safe;
 		true',
);

$workflow->defineTask('dodatabasecompare', 'TYPO3\\Surf\\Task\\ShellTask', $dodatabasecompareOptions);
$workflow->addTask('dodatabasecompare', 'migrate');