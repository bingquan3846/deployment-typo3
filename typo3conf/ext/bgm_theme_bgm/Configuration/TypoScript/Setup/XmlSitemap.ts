temp.linkElement = COA
temp.linkElement {
	wrap = <url>|</url>

	10 = TEXT
	10 {
		typolink {
			parameter.field = uid
			returnLast = url
		}

		wrap = <loc>|</loc>
	}

	20 = TEXT
	20 {
		field = SYS_LASTCHANGED
		strftime = %Y-%m-%dT%H:%M:%SZ
		wrap = <lastmod>|</lastmod>
	}

	30 = TEXT
	30.value = <priority>1.0</priority>

	if.isFalse.field = shortcut
}

xmlSitemap = PAGE
xmlSitemap {
	typeNum = 45

	config {
		no_cache = 1
		disableAllHeaderCode = 1
		additionalHeaders = Content-Type: text/xml; charset=utf-8
		simulateStaticDocuments = 0
		absRefPrefix = {$sitegeneral.canonicalPrefix}/
		tx_realurl_enable = 1
	}

	10 = COA
	10 {
		wrap (
			<?xml version="1.0" encoding="UTF-8"?>
			<urlset xmlns="http://www.google.com/schemas/sitemap/0.84"
			xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
			xsi:schemaLocation="http://www.google.com/schemas/sitemap/0.84 http://www.google.com/schemas/sitemap/0.84/sitemap.xsd"
			>|</urlset>
		)

		10 = HMENU
		10 {
			special = directory

			#Ausgangspunkt / Root Seite
			special.value = {$menu.sitemapRoot}

			#1 = Standard
			#2 = Erweitert
			#3 = Externe URL
			#4 = Shortcut
			#5 = Nicht im Menü
			#6 = Backend Benutzer Bereich
			#7 = Mount Seite
			#199 = Abstand
			#254 = Sysordner
			#255 = Recycler

			excludeDoktypes = 2,3,5,6,7,199,254,255
			excludeUidList = {$menu.sitemapExcludePages}

			excludeUidList.cObject = COA
			excludeUidList.cObject {
				10 = TEXT
				10.value = {$menu.sitemapExcludePages}
				20 = TEXT
				20 {
					field = uid
					if.isTrue {
						value = {$menu.sitemapExcludePages}
						equals.field = pid
					}
				}
			}
			excludeUidList >
			1 = TMENU
			1 {
				expAll = 1
				NO {
					doNotLinkIt = 1

					stdWrap {
						cObject < temp.linkElement
					}
				}
			}

			2 < .1
			2.NO.stdWrap.cObject.30.value = <priority>0.9</priority>

			3 < .1
			3.NO.stdWrap.cObject.30.value = <priority>0.8</priority>

			4 < .1
			4.NO.stdWrap.cObject.30.value = <priority>0.7</priority>

			5 < .1
			5.NO.stdWrap.cObject.30.value = <priority>0.6</priority>

			6 < .1
			6.NO.stdWrap.cObject.30.value = <priority>0.5</priority>

			7 < .6
			8 < .6
			9 < .6
			10 < .6
		}


	}
}