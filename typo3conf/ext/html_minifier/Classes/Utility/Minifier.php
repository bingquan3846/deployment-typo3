<?php

namespace DominikWeber\HtmlMinifier\Utility;

/***************************************************************
 *  Copyright notice
 *
 *  (c) 2016 Dominik Weber <post@dominikweber.de>, www.dominikweber.de
 *
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  The GNU General Public License can be found at
 *  http://www.gnu.org/copyleft/gpl.html.
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 ***************************************************************/

class Minifier{

  	/**
	 * configurationManager
   	 *
   	 * @var  \TYPO3\CMS\Extbase\Configuration\ConfigurationManagerInterface $configurationManager
   	 */
	 protected $configurationManager;

	/**
	 * objectManager
	 *
	 * @var  \TYPO3\CMS\Extbase\Object\ObjectManager $objectManager
	 */
	protected $objectManager;

	/**
	 * settings
	 *
	 * @var  array $settings
	 */
	protected $settings;

	/**
	 * __construct
	 * 
	 */
	public function __construct(){
		$this->objectManager = new \TYPO3\CMS\Extbase\Object\ObjectManager();
		$this->configurationManager = $this->objectManager->get('TYPO3\\CMS\\Extbase\\Configuration\\ConfigurationManagerInterface');
		$fullConfiguration = $this->configurationManager->getConfiguration(
			\TYPO3\CMS\Extbase\Configuration\ConfigurationManagerInterface::CONFIGURATION_TYPE_FULL_TYPOSCRIPT
		);
		if( isset( $fullConfiguration['plugin.']['tx_htmlminifier.'] ) ){
			$typoScriptService = $this->objectManager->get('TYPO3\\CMS\\Extbase\\Service\\TypoScriptService');
			$this->settings = $typoScriptService->convertTypoScriptArrayToPlainArray( $fullConfiguration['plugin.']['tx_htmlminifier.']['settings.'] );
		}
	}

	/**
	 * process 
	 * 
	 * @param  string $content html of current page
	 * 
	 * @return string minified html
	 */
	public function process( $content ){
		if( isset( $this->settings['ignorePids'] ) ){
			$pages = \TYPO3\CMS\Core\Utility\GeneralUtility::trimExplode( ',' , $this->settings['ignorePids'] );
			if( $pages ){
				$pages = array_flip( $pages );
				if( isset( $pages[ $GLOBALS['TSFE']->page['uid'] ] ) ){
					$ignoreCurrentPage = true;
				}
			}
		}
		if( ! $ignoreCurrentPage ){
			$content = $this->minify( $content );
    	}
    	return $content;
	}

	/**
	 * minify
	 * 
	 * @param  string $content 
	 * 
	 * @return string $content
	 */
	protected function minify( $content ){
		$content = preg_replace( '%(?>[^\S ]\s*| \s{2,})(?=(?:(?:[^<]++| <(?!/?(?:textarea|pre)\b))*+)(?:<(?>textarea|pre)\b| \z))%ix' , ' ' , $content );
		return $content;
	}
}