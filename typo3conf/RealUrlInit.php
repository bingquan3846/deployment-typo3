<?php

$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl'] = array(
	'_DEFAULT' => array(
		'init' => array(
			'enableCHashCache' => TRUE,
			'appendMissingSlash' => 'ifNotFile,redirect',
			'adminJumpToBackend' => TRUE,
			'enableUrlDecodeCache' => TRUE,
			'enableUrlEncodeCache' => TRUE,
			'emptyUrlReturnValue' => '/',
		),
		'pagePath' => array(
			'type' => 'user',
			'userFunc' => 'EXT:realurl/class.tx_realurl_advanced.php:&tx_realurl_advanced->main',
			'spaceCharacter' => '-',
			'languageGetVar' => 'L',
			'rootpage_id' => '1',
		),
	),
);

if (file_exists(\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extPath('bgm_theme_bgm') . '/Configuration/RealUrl/Internet.php')) {
	include_once(\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extPath('bgm_theme_bgm') . '/Configuration/RealUrl/Internet.php');
}
