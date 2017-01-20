<?php

/* add select field  */
$temporaryColumn = array(
    'tx_bgmthemebgm_animation' => array (
        'exclude' => 0,
        'label' => 'Animation bei Sichtbarkeit im Viewport',
        'config' => array (
            'type' => 'select',
            'items' => array(
                array('keine Animation', ''),
            )
        )
    )
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns(
    'tt_content',
    $temporaryColumn
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette(
    'tt_content',
    'general',
    'tx_bgmthemebgm_animation',
    'after:CType'
);


//add Image Field to gridleements
$GLOBALS['TCA']['tt_content']['types']['gridelements_pi1']['showitem'] .= ',--div--;Bild (für Hintergrund),image';


/* New ContentElement ContactData Element */

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
    'tt_content',
    'CType',
    [
        'Kontaktdaten (für Kontaktseite neben Formular)',
        'contactdata',
        'content-image'
    ]
);


$GLOBALS['TCA']['tt_content']['types']['contactdata']['showitem'] = '
    --palette--;LLL:EXT:cms/locallang_ttc.xml:palette.general;general, header,
    --div--;LLL:EXT:cms/locallang_ttc.xlf:tabs.access,
    --div--;LLL:EXT:cms/locallang_ttc.xlf:tabs.appearance,
    --palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.frames;frames,media,
    --palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.visibility;visibility,
    --div--;LLL:EXT:lang/locallang_tca.xlf:sys_category.tabs.category,categories,
    --div--;LLL:EXT:gridelements/Resources/Private/Language/locallang_db.xlf:gridElements,tx_gridelements_container,tx_gridelements_columns';



/* New ContentElement Referenz Element */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
    'tt_content',
    'CType',
    [
        'Referenz (Bild und Link)',
        'referenceelement',
        'content-image'
    ]
);

$GLOBALS['TCA']['tt_content']['types']['referenceelement']['showitem'] = '
    --palette--;LLL:EXT:cms/locallang_ttc.xml:palette.general;general,header,subheader,header_link,image,
     --div--;LLL:EXT:cms/locallang_ttc.xlf:tabs.access,
    --div--;LLL:EXT:cms/locallang_ttc.xlf:tabs.appearance,
    --palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.frames;frames,media,
    --palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.visibility;visibility,
    --div--;LLL:EXT:lang/locallang_tca.xlf:sys_category.tabs.category,categories,
    --div--;LLL:EXT:gridelements/Resources/Private/Language/locallang_db.xlf:gridElements,tx_gridelements_container,tx_gridelements_columns';




/* New ContentElement Referenz Element */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
    'tt_content',
    'CType',
    [
        'Bild für Imageslider',
        'imagesliderelement',
        'content-image'
    ]
);


$GLOBALS['TCA']['tt_content']['types']['imagesliderelement']['showitem'] = '
    --palette--;LLL:EXT:cms/locallang_ttc.xml:palette.general;general, header,image,
    --div--;LLL:EXT:cms/locallang_ttc.xml:tabs.access,
    --palette--;LLL:EXT:cms/locallang_ttc.xml:palette.visibility;visibility,
    --palette--;LLL:EXT:cms/locallang_ttc.xml:palette.access;access,
    --div--;LLL:EXT:cms/locallang_ttc.xml:tabs.extended,tx_gridelements_container, tx_gridelements_columns';



?>