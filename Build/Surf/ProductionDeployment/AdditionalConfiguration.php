<?php
/**
 * In this file we can overwrite some LocalConfiguration settings for our local server.
 * This file will never make it's way to another server because it is ignored by git.
 * This file is included automatically by TYPO3 after LocalConfiguration.php.
 * This settings are settings for the local server!
 */

if (!defined('TYPO3_MODE')) {
    die ('Access denied.');
}

$GLOBALS['TYPO3_CONF_VARS']['BE']['cookieDomain'] = '.production.mtug.bgm-hosting.com';
$GLOBALS['TYPO3_CONF_VARS']['BE']['cookieName'] = 'be_typo_user_production';
//$GLOBALS['TYPO3_CONF_VARS']['BE']['debug'] = true;
//$GLOBALS['TYPO3_CONF_VARS']['BE']['installToolPassword'] = '$P$CEF2NP3kCoIHwDupr8RiYUMQ7/Rp.j.';
$GLOBALS['TYPO3_CONF_VARS']['BE']['lockSSL'] = 0;

//$GLOBALS['TYPO3_CONF_VARS']['DB']['host'] = '';
//$GLOBALS['TYPO3_CONF_VARS']['DB']['database'] = '';
//$GLOBALS['TYPO3_CONF_VARS']['DB']['username'] = '';
//$GLOBALS['TYPO3_CONF_VARS']['DB']['password'] = '';

$GLOBALS['TYPO3_CONF_VARS']['FE']['cookieDomain'] = '.production.mtug.bgm-hosting.com';
$GLOBALS['TYPO3_CONF_VARS']['FE']['cookieName'] = 'fe_typo_user_production';
//$GLOBALS['TYPO3_CONF_VARS']['FE']['debug'] = true;

// Use redis instead of database for performance
/*
$GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['cache_hash']['backend'] = \TYPO3\CMS\Core\Cache\Backend\RedisBackend::class;
$GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['cache_hash']['options']['hostname'] = '127.0.0.1';
$GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['cache_imagesizes']['backend'] = \TYPO3\CMS\Core\Cache\Backend\RedisBackend::class;
$GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['cache_imagesizes']['options']['hostname'] = '127.0.0.1';
$GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['cache_news_category']['backend'] = \TYPO3\CMS\Core\Cache\Backend\RedisBackend::class;
$GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['cache_news_category']['options']['hostname'] = '127.0.0.1';
$GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['cache_pages']['backend'] = \TYPO3\CMS\Core\Cache\Backend\RedisBackend::class;
$GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['cache_pages']['options']['hostname'] = '127.0.0.1';
$GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['cache_pages']['options']['compression'] = false;
$GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['cache_pagesection']['backend'] = \TYPO3\CMS\Core\Cache\Backend\RedisBackend::class;
$GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['cache_pagesection']['options']['hostname'] = '127.0.0.1';
$GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['cache_pagesection']['options']['compression'] = false;
$GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['cache_rootline']['backend'] = \TYPO3\CMS\Core\Cache\Backend\RedisBackend::class;
$GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['cache_rootline']['options']['hostname'] = '127.0.0.1';
$GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['extbase_datamapfactory_datamap']['backend'] = \TYPO3\CMS\Core\Cache\Backend\RedisBackend::class;
$GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['extbase_datamapfactory_datamap']['options']['hostname'] = '127.0.0.1';
$GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['extbase_object']['backend'] = \TYPO3\CMS\Core\Cache\Backend\RedisBackend::class;
$GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['extbase_object']['options']['hostname'] = '127.0.0.1';
$GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['extbase_reflection']['backend'] = \TYPO3\CMS\Core\Cache\Backend\RedisBackend::class;
$GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['extbase_reflection']['options']['hostname'] = '127.0.0.1';
$GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['extbase_typo3dbbackend_queries']['backend'] = \TYPO3\CMS\Core\Cache\Backend\RedisBackend::class;
$GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['extbase_typo3dbbackend_queries']['options']['hostname'] = '127.0.0.1';
$GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['tx_solr']['backend'] = \TYPO3\CMS\Core\Cache\Backend\RedisBackend::class;
$GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['tx_solr']['options']['hostname'] = '127.0.0.1';
$GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['tx_solr_configuration']['backend'] = \TYPO3\CMS\Core\Cache\Backend\RedisBackend::class;
$GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['tx_solr_configuration']['options']['hostname'] = '127.0.0.1';
*/
// Caches with file backend should not get shared via NFS. You have to clear them manual on every server. Normaly they don't need to be cleared on production (they are all in the system group), so we don't need to implement magic stuff. During deployment cache is cleared on every server with surf.
$GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['cache_core']['options']['cacheDirectory'] = 'typo3temp_local';
$GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['cache_phpcode']['options']['cacheDirectory'] = 'typo3temp_local';
$GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['fluid_template']['options']['cacheDirectory'] = 'typo3temp_local';
$GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['l10n']['options']['cacheDirectory'] = 'typo3temp_local';
$GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['news']['backend'] = \TYPO3\CMS\Core\Cache\Backend\FileBackend::class;
$GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['news']['options']['cacheDirectory'] = 'typo3temp_local';
$GLOBALS['TYPO3_CONF_VARS']['SYS']['cookieDomain'] = '.production.mtug.bgm-hosting.com';
//$GLOBALS['TYPO3_CONF_VARS']['SYS']['devIPmask'] = '*';
//$GLOBALS['TYPO3_CONF_VARS']['SYS']['displayErrors'] = true;
//$GLOBALS['TYPO3_CONF_VARS']['SYS']['enableDeprecationLog'] = 'file';
//$GLOBALS['TYPO3_CONF_VARS']['SYS']['sitename'] = 'MTUG Internet (' . php_uname(n) . ')';
//$GLOBALS['TYPO3_CONF_VARS']['SYS']['sqlDebug'] = 1;
//$GLOBALS['TYPO3_CONF_VARS']['SYS']['systemLogLevel'] = 0;
$GLOBALS['TYPO3_CONF_VARS']['SYS']['trustedHostsPattern'] = 'production\.mtug\.bgm-hosting\.com';

$localconfDir = dirname(__FILE__);
if (file_exists($localconfDir . '/iniset.php')) {
        include_once($localconfDir . '/iniset.php');
}
?>
