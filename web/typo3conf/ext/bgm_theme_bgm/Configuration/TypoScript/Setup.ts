/**
 * The TypoScript setup init file
 * This file is included in the TypoScript root template on the page "myPage".
 *
 * @ToDo: Discuss if the extensions "Include Static" templates should be included here, too.
 */
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:bgm_theme_bgm/Configuration/TypoScript/Setup/Config.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:bgm_theme_bgm/Configuration/TypoScript/Setup/Navigation.ts">
        <INCLUDE_TYPOSCRIPT: source="FILE:EXT:bgm_theme_bgm/Configuration/TypoScript/Setup/XmlSitemap.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:bgm_theme_bgm/Configuration/TypoScript/Setup/TsObjects.ts">


<INCLUDE_TYPOSCRIPT: source="FILE:EXT:bgm_theme_bgm/Configuration/TypoScript/Setup/StaticFooter.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:bgm_theme_bgm/Configuration/TypoScript/Setup/Images.ts">


<INCLUDE_TYPOSCRIPT: source="FILE:EXT:bgm_theme_bgm/Configuration/TypoScript/Setup/Breadcrumb.ts">


<INCLUDE_TYPOSCRIPT: source="FILE:EXT:bgm_theme_bgm/Configuration/TypoScript/Setup/Powermail.ts">

#"myPage" TypoScript setup:
#Here is just one file Content.ts included. Perhaps you have to split it to more files to fit your needs ;-)
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:bgm_theme_bgm/Configuration/TypoScript/Setup/Content.ts">



#<INCLUDE_TYPOSCRIPT: source="FILE:EXT:bgm_theme_bgm/Configuration/TypoScript/Setup/Config.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:bgm_theme_bgm/Configuration/TypoScript/Setup/Page.ts">

#Perhaps we have to overwrite something for our local server, so we include a configuration file which will not be published to other servers (see .gitignore)
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:bgm_theme_bgm/Configuration/TypoScript/Local/Setup.ts">