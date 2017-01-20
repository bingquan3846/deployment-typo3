<?php
return [
    'BE' => [
        'debug' => false,
        'explicitADmode' => 'explicitAllow',
        'installToolPassword' => '$P$CojsLetffmulnA41Gwu2kVxz8MH4fT.',
        'loginSecurityLevel' => 'rsa',
        'versionNumberInFilename' => '1',
    ],
    'DB' => [
        'database' => 'www1_mtug_production',
        'host' => '127.0.0.1',
        'password' => 'mtug',
        'port' => '3306',
        'socket' => '',
        'username' => 'mtug',
    ],
    'EXT' => [
        'extConf' => [
            'backend' => 'a:3:{s:9:"loginLogo";s:64:"typo3conf/ext/bgm_theme_bgm/Resources/Public/Images/bgm_logo.png";s:19:"loginHighlightColor";s:7:"#afca08";s:20:"loginBackgroundImage";s:34:"fileadmin/files/images/startbg.jpg";}',
            'bgm_theme_bgm' => 'a:0:{}',
            'cs_seo' => 'a:7:{s:17:"enablePathSegment";s:1:"1";s:11:"tsConfigPid";s:1:"1";s:8:"maxTitle";s:2:"57";s:14:"maxDescription";s:3:"156";s:11:"maxNavTitle";s:2:"50";s:12:"inPageModule";s:1:"0";s:10:"evaluators";s:38:"Title,Description,H1,H2,Images,Keyword";}',
            'fluid_styled_content' => 'a:1:{s:32:"loadContentElementWizardTsConfig";s:1:"1";}',
            'gridelements' => 'a:2:{s:20:"additionalStylesheet";s:0:"";s:19:"nestingInListModule";s:1:"1";}',
            'html_minifier' => 'a:0:{}',
            'image_autoresize' => 'a:0:{}',
            'image_autoresize_ff' => 'a:9:{s:11:"directories";s:20:"fileadmin/*,uploads/";s:10:"file_types";s:12:"jpg,jpeg,png";s:9:"threshold";s:3:"50K";s:9:"max_width";s:4:"1920";s:10:"max_height";s:4:"1200";s:11:"auto_orient";s:1:"1";s:18:"conversion_mapping";s:65:"ai => jpg,bmp => jpg,pcx => jpg,tga => jpg,tif => jpg,tiff => jpg";s:13:"keep_metadata";s:1:"0";s:21:"resize_png_with_alpha";s:1:"0";}',
            'mr_tinypng' => 'a:1:{s:13:"tinypngApiKey";s:32:"At9slHIIiHD_81khAwK7nIV04XHIQyTg";}',
            'nc_staticfilecache' => 'a:8:{s:23:"clearCacheForAllDomains";s:1:"1";s:22:"sendCacheControlHeader";s:1:"1";s:47:"sendCacheControlHeaderRedirectAfterCacheTimeout";s:1:"0";s:27:"enableStaticFileCompression";s:1:"1";s:23:"showGenerationSignature";s:1:"1";s:9:"fileTypes";s:7:"xml,rss";s:8:"strftime";s:14:"%d-%m-%y %H:%M";s:11:"recreateURI";s:1:"1";}',
            'page_speed' => 'a:3:{s:3:"key";s:39:"AIzaSyCU9YX25-ty--Zj1jdK4Eup_npSvd17xtQ";s:9:"cacheTime";s:5:"86400";s:4:"demo";s:1:"0";}',
            'powermail' => 'a:8:{s:12:"disableIpLog";s:1:"1";s:27:"disableMarketingInformation";s:1:"1";s:20:"disableBackendModule";s:1:"0";s:24:"disablePluginInformation";s:1:"0";s:13:"enableCaching";s:1:"0";s:28:"enableTableGarbageCollection";s:1:"0";s:15:"l10n_mode_merge";s:1:"0";s:29:"replaceIrreWithElementBrowser";s:1:"0";}',
            'realurl' => 'a:5:{s:10:"configFile";s:25:"typo3conf/RealUrlInit.php";s:14:"enableAutoConf";s:1:"0";s:14:"autoConfFormat";s:1:"0";s:12:"enableDevLog";s:1:"0";s:19:"enableChashUrlDebug";s:1:"0";}',
            'rsaauth' => 'a:1:{s:18:"temporaryDirectory";s:0:"";}',
            'rtehtmlarea' => 'a:8:{s:21:"noSpellCheckLanguages";s:23:"ja,km,ko,lo,th,zh,b5,gb";s:15:"AspellDirectory";s:15:"/usr/bin/aspell";s:20:"defaultConfiguration";s:105:"Typical (Most commonly used features are enabled. Select this option if you are unsure which one to use.)";s:12:"enableImages";s:1:"1";s:20:"enableInlineElements";s:1:"0";s:19:"allowStyleAttribute";s:1:"1";s:24:"enableAccessibilityIcons";s:1:"0";s:16:"forceCommandMode";s:1:"0";}',
            'saltedpasswords' => 'a:2:{s:3:"BE.";a:4:{s:21:"saltedPWHashingMethod";s:41:"TYPO3\\CMS\\Saltedpasswords\\Salt\\PhpassSalt";s:11:"forceSalted";i:0;s:15:"onlyAuthService";i:0;s:12:"updatePasswd";i:1;}s:3:"FE.";a:5:{s:7:"enabled";i:1;s:21:"saltedPWHashingMethod";s:41:"TYPO3\\CMS\\Saltedpasswords\\Salt\\PhpassSalt";s:11:"forceSalted";i:0;s:15:"onlyAuthService";i:0;s:12:"updatePasswd";i:1;}}',
            'styleguide' => 'a:32:{s:8:"string_1";s:5:"value";s:8:"string_2";s:0:"";s:7:"small_1";s:5:"value";s:7:"small_2";s:0:"";s:6:"wrap_1";s:5:"value";s:6:"wrap_2";s:0:"";s:7:"color_1";s:5:"black";s:7:"color_2";s:7:"#000000";s:7:"color_3";s:6:"000000";s:7:"color_4";s:0:"";s:8:"offset_1";s:3:"x,y";s:8:"offset_2";s:1:"x";s:8:"offset_3";s:2:",y";s:8:"offset_4";s:0:"";s:6:"user_1";s:1:"0";s:9:"options_1";s:7:"default";s:9:"options_2";s:8:"option_2";s:9:"options_3";s:0:"";s:9:"boolean_1";s:1:"0";s:9:"boolean_2";s:1:"1";s:9:"boolean_3";s:0:"";s:5:"int_1";s:1:"1";s:5:"int_2";s:0:"";s:9:"integer_1";s:1:"1";s:9:"integer_2";s:0:"";s:9:"intplus_1";s:1:"1";s:9:"intplus_2";s:0:"";s:9:"intplus_3";s:4:"-100";s:14:"compat_input_1";s:5:"value";s:14:"compat_input_2";s:0:"";s:16:"compat_default_1";s:5:"value";s:16:"compat_default_2";s:0:"";}',
            't3monitoring_client' => 'a:3:{s:6:"secret";s:50:"5dc0bd601ef68d72525649e6adb2a4a6cf1a982e4f17a457ea";s:10:"allowedIps";s:12:"176.9.78.114";s:20:"enableDebugForErrors";s:1:"0";}',
            'typo3_console' => 'a:0:{}',
            'version' => 'a:0:{}',
        ],
    ],
    'EXTCONF' => [
        'lang' => [
            'availableLanguages' => [
                'de',
            ],
        ],
    ],
    'FE' => [
        'cHashIncludePageId' => true,
        'compressionLevel' => '9',
        'debug' => false,
        'loginSecurityLevel' => 'rsa',
        'pageNotFound_handling' => 'USER_FUNCTION:typo3conf/ext/bgm_theme_bgm/pageNotFoundHandling.php:user_pageNotFound->pageNotFound',
        'versionNumberInFilename' => '1',
    ],
    'GFX' => [
        'colorspace' => 'RGB',
        'im' => 1,
        'im_mask_temp_ext_gif' => 1,
        'im_path' => '/usr/bin/',
        'im_path_lzw' => '/usr/bin/',
        'im_v5effects' => -1,
        'im_version_5' => 'gm',
        'image_processing' => 1,
        'jpg_quality' => '80',
    ],
    'INSTALL' => [
        'wizardDone' => [
            'TYPO3\CMS\Install\Updates\BackendUserStartModuleUpdate' => 1,
            'TYPO3\CMS\Install\Updates\ContentTypesToTextMediaUpdate' => 1,
            'TYPO3\CMS\Install\Updates\FileListIsStartModuleUpdate' => 1,
            'TYPO3\CMS\Install\Updates\FilesReplacePermissionUpdate' => 1,
            'TYPO3\CMS\Install\Updates\MigrateMediaToAssetsForTextMediaCe' => 1,
        ],
    ],
    'SYS' => [
        'caching' => [
            'cacheConfigurations' => [
                'extbase_object' => [
                    'backend' => 'TYPO3\\CMS\\Core\\Cache\\Backend\\Typo3DatabaseBackend',
                    'frontend' => 'TYPO3\\CMS\\Core\\Cache\\Frontend\\VariableFrontend',
                    'groups' => [
                        'system',
                    ],
                    'options' => [
                        'defaultLifetime' => 0,
                    ],
                ],
            ],
        ],
        'clearCacheSystem' => false,
        'devIPmask' => '',
        'displayErrors' => '1',
        'enableDeprecationLog' => false,
        'encryptionKey' => '2b84f13e157f47df534713a6c05328783c36bc70669cd5555f6de5505c7c0382a22cf8bbfd85c0edd68d4cd9b3aabbe3',
        'isInitialInstallationInProgress' => false,
        'sitename' => 'bgm-gmbh.de',
        'sqlDebug' => 0,
        'systemLogLevel' => 2,
        't3lib_cs_convMethod' => 'mbstring',
        't3lib_cs_utils' => 'mbstring',
    ],
];
