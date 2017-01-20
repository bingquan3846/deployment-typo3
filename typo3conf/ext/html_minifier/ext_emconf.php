<?php

/***************************************************************
 * Extension Manager/Repository config file for ext "html_minifier".
 *
 * Auto generated 21-09-2016 13:34
 *
 * Manual updates:
 * Only the data in the array - everything else is removed by next
 * writing. "version" and "dependencies" must not be touched!
 ***************************************************************/

$EM_CONF[$_EXTKEY] = array (
  'title' => 'HTML Minifier',
  'description' => 'This extension minifies the output of TYPO3 generated pages.',
  'category' => 'fe',
  'version' => '1.1.3',
  'state' => 'stable',
  'uploadfolder' => false,
  'createDirs' => '',
  'clearcacheonload' => true,
  'author' => 'Dominik Weber',
  'author_email' => 'post@dominikweber.de',
  'author_company' => 'www.dominikweber.de',
  'constraints' => 
  array (
    'depends' => 
    array (
      'php' => '5.4.0-0.0.0',
      'typo3' => '6.0.0-8.99.99',
    ),
    'conflicts' => 
    array (
    ),
    'suggests' => 
    array (
    ),
  ),
);

