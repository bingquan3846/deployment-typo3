<?php

namespace Clickstorm\CsSeo\Hook;

/***************************************************************
 *
 *  Copyright notice
 *
 *  (c) 2016 Marc Hirdes <hirdes@clickstorm.de>, clickstorm GmbH
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

use TYPO3\CMS\Backend\Controller\PageLayoutController;
use TYPO3\CMS\Backend\Utility\BackendUtility;
use TYPO3\CMS\Core\Page\PageRenderer;
use TYPO3\CMS\Fluid\View\StandaloneView;
use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;
use TYPO3\CMS\Core\Utility\GeneralUtility;

/**
 * hook to display the evaluation results in the page module
 *
 * Class pageHook
 * @package Clickstorm\CsSeo\Hook
 */
class PageHook {

	/**
	 * @var StandaloneView
	 */
	protected $view;

	/**
	 * Load the necessary css
	 *
	 * This will only be done when the referenced record is available
	 *
	 * @return void
	 */
	protected function loadCss()
	{
		// @todo Set to TRUE when finished
		$compress = false;
		$cssFiles = array(
			'Icons.css',
			'Evaluation.css'
		);
		$baseUrl = '/typo3conf/ext/cs_seo/Resources/Public/CSS/';
		// Load the wizards css
		foreach ($cssFiles as $cssFile) {
			$this->getPageRenderer()->addCssFile($baseUrl . $cssFile, 'stylesheet', 'all', '', $compress, false);
		}
	}

	/**
	 * Load the necessary javascript
	 *
	 * This will only be done when the referenced record is available
	 *
	 * @return void
	 */
	protected function loadJavascript()
	{
		$compress = false;
		$javascriptFiles = array(
			'jquery.cookie.js',
			'jquery.cs_seo.evaluation.js'
		);
		// Load jquery
		$this->getPageRenderer()->loadJquery();

		// Load the wizards javascript
		$baseUrl = '/typo3conf/ext/cs_seo/Resources/Public/JavaScript/';

		foreach ($javascriptFiles as $javascriptFile) {
			$this->getPageRenderer()->addJsFile($baseUrl . $javascriptFile, 'text/javascript', $compress, false, '', true, '|', true);
		}
	}


	/**
	 * Add sys_notes as additional content to the footer of the page module
	 *
	 * @param array $params
	 * @param PageLayoutController $parentObject
	 * @return string
	 */
	public function render(array $params = array(), PageLayoutController $parentObject)
	{
		if($parentObject->MOD_SETTINGS['function'] == 1) {
			$pageInfo = $parentObject->pageinfo;
			if($this->pageCanBeIndexed($pageInfo)) {
				// template
				$this->loadCss();
				$this->loadJavascript();

				$this->view = GeneralUtility::makeInstance(StandaloneView::class);
				$this->view->setFormat('html');
				$this->view->getRequest()->setControllerExtensionName('cs_seo');
				$this->view->setLayoutRootPaths([10 => ExtensionManagementUtility::extPath('cs_seo') . '/Resources/Private/Layouts/']);
				$this->view->setPartialRootPaths([10 => ExtensionManagementUtility::extPath('cs_seo') . '/Resources/Private/Partials/']);
				$this->view->setTemplatePathAndFilename(ExtensionManagementUtility::extPath('cs_seo') . 'Resources/Private/Templates/PageHook.html');

				$results = $this->getResults($pageInfo, $parentObject->current_sys_language);
				$score = $results['Percentage'];
				unset($results['Percentage']);

				$this->view->assignMultiple([
					'score' => $score,
					'results'=> $results,
					'page' => $parentObject->pageinfo
				]);

				return $this->view->render();
			}
		}
	}

	/**
	 * @param array $page
	 * @return bool
	 */
	public function pageCanBeIndexed($page) {
		if($page['doktype'] == 1 && $page['hidden'] == 0) {
			return true;
		}
		return false;
	}

	/**
	 * @return PageRenderer
	 */
	protected function getPageRenderer()
	{
		if (!isset($this->pageRenderer)) {
			$this->pageRenderer = GeneralUtility::makeInstance(PageRenderer::class);
		}
		return $this->pageRenderer;
	}

	/**
	 * @param $pageInfo
	 * @param $lang
	 * @return array
	 */
	protected function getResults($pageInfo, $lang)
	{
		$results = [];
		
		if($lang) {
			$tableName = 'pages_language_overlay';
			$localizedPageInfo = BackendUtility::getRecordLocalization('pages', $pageInfo['uid'], $lang);
			if($localizedPageInfo[0]) {
				$uidForeign = $localizedPageInfo[0]['uid'];
			} else {
				return [];
			}
		} else {
			$tableName = 'pages';
			$uidForeign = $pageInfo['uid'];
		}

		$where = 'uid_foreign = ' . $uidForeign;
		$where .= ' AND tablenames = "' . $tableName . '"';

		$res = $this->getDatabaseConnection()->exec_SELECTquery(
			'results',
			'tx_csseo_domain_model_evaluation',
			$where
		);
		while ($row = $this->getDatabaseConnection()->sql_fetch_assoc($res)) {
			$results = unserialize($row['results']);
		}
		return $results;
	}

	/**
	 * Returns the database connection
	 *
	 * @return \TYPO3\CMS\Core\Database\DatabaseConnection
	 */
	protected function getDatabaseConnection()
	{
		return $GLOBALS['TYPO3_DB'];
	}
}