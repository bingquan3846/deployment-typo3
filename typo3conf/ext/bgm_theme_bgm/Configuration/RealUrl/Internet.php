<?php

$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['_DEFAULT']['pagePath']['rootpage_id'] = 34;

$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['_DEFAULT']['fileName'] = array(
    'index' => array(
        'sitemap.xml' => array(
            'keyValues' => array(
                'type' => 45,
            ),
        ),
        'Sitemap.xml' => array(
            'keyValues' => array(
                'type' => 45,
            ),
        ),
    ),
);

$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['production.mtug.bgm-hosting.com'] = $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['_DEFAULT'];

if (file_exists(\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extPath('bgm_theme_bgm') . '/Configuration/RealUrl/Local.php')) {
    include_once(\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extPath('bgm_theme_bgm') . '/Configuration/RealUrl/Local.php');
}
?>
