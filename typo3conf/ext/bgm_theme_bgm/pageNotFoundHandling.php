<?php

if (!defined ('TYPO3_MODE')) {
	die('Access denied.');
}

use \TYPO3\CMS\Core\Utility\GeneralUtility;

class user_pageNotFound {
	function pageNotFound($params,$tsfeObj) {
		global $TYPO3_CONF_VARS;

		$url = GeneralUtility::getIndpEnv('TYPO3_SITE_URL').'index.php?id='.$TYPO3_CONF_VARS['EXTCONF']['realurl'][GeneralUtility::getIndpEnv('HTTP_HOST')]['errorPage'];

		$_buffer = $this->loadPage($url);
		echo $_buffer;
	}

	function loadPage($url) {
		$agent = "TYPO3 pageNotFoundFunction v1.0";
		$header[] = "Accept: text/vnd.wap.wml,*.*";
		$ch = curl_init($url);

		if ($ch) {
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			curl_setopt($ch, CURLOPT_USERAGENT, $agent);
			curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
			curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);

			$tmp = curl_exec($ch);

			if(FALSE == $tmp) {
				print_r(curl_error($ch));
			}

			curl_close($ch);
		}
		return $tmp;
	}
}