/**
 * The TypoScript constants init file
 * This file is included in the TypoScript root template on the MAIN-page.
 *
 */

#TypoScript constants:




config {
	adminPanel = 0
	debug = 0
}

filePath {
	pageTemplates = EXT:bgm_theme_bgm/Resources/Private/Templates/Pages/
	extensionTemplates = EXT:bgm_theme_bgm/Resources/Private/Templates/Extensions/
	partials = EXT:bgm_theme_bgm/Resources/Private/Partials/
	language = EXT:bgm_theme_bgm/Resources/Private/Language/
	images = EXT:bgm_theme_bgm/Resources/Public/Images/
	css = EXT:bgm_theme_bgm/Resources/Public/Css/
	javascript = EXT:bgm_theme_bgm/Resources/Public/Javascript/
}
menu{
	pathToLogo = typo3conf/ext/bgm_theme_bgm/Resources/Public/Images/bgm_logo.png
	footernavigationSysfolder = 7
	google = https://plus.google.com/****
	facebook = https://www.facebook.com/bgmGmbH
	twitter = https://twitter.com/bgmgmbh
	xing = https://www.xing.com/companies/bgmgmbh&co.kg
	#define XML-Sitemap ExludePages (comma seperated)
	sitemapExcludePages =
	# startpage ID (used eg for logo)
	root = 1
	# startpage ID for xml sitemap
	sitemapRoot = 1
}

sitegeneral {
	logoAltTtileText = TYPO3 Agentur bgm websolutions
	telephone = +49 (89) 660 7 999-0
	email = typo3@bgm-gmbh.de
	contactName = bgm websolutions GmbH & Co. KG
	contactStreet = Prof.-Messerschmitt-Str. 1
	contactCity = 85579 Neubiberg
	contactFax = +49 89 660 7 999 - 10
	copyrightText = bgm websolutions GmbH & Co. KG<br>TYPO3 and its logo are registered <a href="https://typo3.org/about/the-trademarks/" style="color:#fff;">trademarks</a> of the TYPO3 Association
	#the page title is prepended with:
	browserTitleSuffix = bgm websolutions
	canonicalPrefix = http://production.mtug.bgm-hosting.com/
	footerStaticContentLeftUid = 47
	footerStaticContentCenterUid = 48
	footerStaticContentContactContentUid = 125

}

language {
	sys_language_uid = 0
	language = de
	htmlTag_langKey = de
	locale_all = de_DE.UTF-8
}

#set default header to h2
content.defaultHeaderType = 2

#max Image Width
styles.content.textmedia.maxW = 1400

#Overwite FluidTemplates if present
styles.templates.templateRootPath = EXT:bgm_theme_bgm/Resources/Private/Templates/FluidCe/Templates/
styles.templates.partialRootPath = EXT:bgm_theme_bgm/Resources/Private/Templates/FluidCe/Partials/
styles.templates.layoutRootPath = EXT:bgm_theme_bgm/Resources/Private/Templates/FluidCe/Layouts/


#Perhaps we have to overwrite something for our local server, so we include a configuration file which will not be published to other servers (see .gitignore)
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:bgm_theme_bgm/Configuration/TypoScript/Local/Constants.ts">
