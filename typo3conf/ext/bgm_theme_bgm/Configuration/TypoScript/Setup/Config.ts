/**
 * The TypoScript setup config file
 * This file is included in EXT:bgm_theme_bgm/Configuration/TypoScript/Setup.ts.
 *
 * Here you find the TypoScript CONFIG object
 */
config {
	// Administrator settings
	admPanel = {$config.adminPanel}
	debug = {$config.debug}

	doctype = html5

	htmlTag_setParams = class="no-js"
	// Character sets
	renderCharset = utf-8
	metaCharset = utf-8

	// Cache settings
	cache_period = 86400
	sendCacheHeaders = 1

	// URL Settings
	tx_realurl_enable = 1
	simulateStaticDocuments = 0

	// Language Settings
	sys_language_uid = {$language.sys_language_uid}
	language = {$language.language}
	htmlTag_langKey = {$language.htmlTag_langKey}
	locale_all = {$language.locale_all}

	sys_language_overlay = 1
	sys_language_mode = content_fallback

	// Link settings
	uniqueLinkVars = 1
	#linkVars := addToList(L(1),type(3))
	prefixLocalAnchors = all

	###we supply own title-tag
	noPageTitle = 2

	// Remove targets from links
	intTarget =
	extTarget =

	// Code cleaning
	disablePrefixComment = 1

	// Move default CSS and JS to external file
	removeDefaultJS = external
	inlineStyle2TempFile = 1

	# Minify and compress CSS and JS
	compressJs = 1
	compressCss = 1
	concatenateJs = 1
	concatenateCss = 1

	// Protect mail addresses from spamming
	spamProtectEmailAddresses = -3
	spamProtectEmailAddresses_atSubst = @<span style="display:none;">remove-this.</span>

	// Comment in the <head> tag
	headerComment (
		Developed by:
		bgm business group munich GmbH und Co. KG
		Prof.-Messerschmitt-Str. 1
		85579 Neubiberg
		info@bgm-gmbh.de
		typo3.bgm-gmbh.de
	)
	meaningfulTempFilePrefix = 30
	absRefPrefix = /
	typolinkCheckRootline = 1
	typolinkEnableLinksAcrossDomains = 1
	moveJsFromHeaderToFooter = 1

}
