#Standard Logo left in Header Desktop View
lib.siteLogoNormal = COA
lib.siteLogoNormal {
	10 = TEXT
	10.value (
		<img src="{$menu.pathToLogo}" alt="{$sitegeneral.logoAltTtileText}" title="{$sitegeneral.logoAltTtileText}">
	)
	10.stdWrap.typolink {
		parameter = {$menu.root}
	}
}





#canonical
lib.canonical = TEXT
lib.canonical {
	typolink {
		parameter.field = uid
		useCacheHash = 0
		# add all get parameters from the current URL
		addQueryString = 1
		addQueryString.method = GET
		# remove the page id from the parameters so it is not inserted twice
		addQueryString.exclude = id,backpid,no_cache,cHash,tx_seminarcalendar_pi1[year],tx_seminarcalendar_pi1[month],mc
		returnLast = url
	}
	noTrimWrap (
|
			<link rel="canonical" href="|" />
|
	)
}
#<link rel="canonical" href="{$sitegeneral.canonicalPrefix}|" />

#create title-Tag
temp.pageTitle = COA
temp.pageTitle {
	5 = TEXT
	5.field = title
	10 = TEXT
	10.value = {$sitegeneral.browserTitleSuffix}
	10.htmlSpecialChars = 1
	10.noTrimWrap.splitChar = x
	10.noTrimWrap = x | x x
	stdWrap.noTrimWrap (
  |  <title>|</title>
  |
	)
}

temp.referenceNavigation = COA
temp.referenceNavigation {
	10 = TEXT
	10 {
		field = title
		wrap (
			<div class="eight_twelve_left">
					<h1>|</h1>
				</div>
		)
	}
	20 =COA
	20 {
		10 < lib.prevNextMenu
		stdWrap.wrap (
			<div class="four_twelve_right">
					<div class="nextPrevContainer">|</div>
				</div>
		)
	}
	stdWrap.wrap (
		<div class="full light referenceNavigation ">
			<div class="page_wrap padding">
				|
			</div>
		</div>
	)
}








#Actual year (used for copyright)
temp.year = TEXT
temp.year {
	data = date:U
	strftime = %Y
}



lib.telephone = COA
lib.telephone {
	10 = TEXT
	10.value = {$sitegeneral.telephone}
	10.wrap (
		<span class="telephoneContact">
			|
		</span>
	)
}

lib.email = COA
lib.email {
	10 = TEXT
	10.value = {$sitegeneral.email}
	10.typolink.parameter = {$sitegeneral.email}
	stdWrap.wrap (
		<span class="emailContact">|</span>
	)
}

lib.fax = COA
lib.fax {
	10 = TEXT
	10.value = {$sitegeneral.contactFax}
	stdWrap.wrap (
		<span class="faxContact">|</span>
	)
}

lib.location= COA
lib.location {
	10 = TEXT
	10.value (
		<span class="locationContactCompany">{$sitegeneral.contactName}</span>
		<br>
		<span>{$sitegeneral.contactStreet}</span>
		<br>
		<span>{$sitegeneral.contactCity}</span>
	)
	stdWrap.wrap (
		<span class="locationContact">|</span>
	)
}


#copyright Footer left side
lib.copyright = COA
lib.copyright {

	10 = TEXT
	10.data= LLL:EXT:bgm_theme_bgm/Resources/Private/Language/Frontend.xml:copyright.copyright
	10.noTrimWrap = | | |
	20 < temp.year
	30 = TEXT
	30.value = {$sitegeneral.copyrightText}
	30.noTrimWrap = | | |

}


lib.linkGoogle = TEXT
lib.linkGoogle {
	value = <span class="tradeoftheweek-google"></span>
	typolink {
		parameter = {$menu.google}
		extTarget = _blank
	}
}

temp.linkFacebook = TEXT
temp.linkFacebook {
	value = <span class="icon-facebook"></span>
	typolink {
		parameter = {$menu.facebook}
		extTarget = _blank
		ATagParams = class="socialmedialink link-facebook"
	}
}



temp.linkTwitter = TEXT
temp.linkTwitter {
	value = <span class="icon-twitter"></span>
	typolink {
		parameter = {$menu.twitter}
		extTarget = _blank
		ATagParams = class="socialmedialink link-twitter"
	}
}

temp.linkXing = TEXT
temp.linkXing {
	value = <span class="icon-xing"></span>
	typolink {
		parameter = {$menu.xing}
		extTarget = _blank
		ATagParams = class="socialmedialink link-xing"
	}
}

lib.topbarRight = COA
lib.topbarRight {
	10 < temp.linkFacebook
	20 < temp.linkTwitter
	30 < temp.linkXing
}


#<f:cObject typoscriptObjectPath="normalImage" data="{uid:data.uid}" />

/*
lib.userImage = IMAGE
lib.userImage.import.cObject = USER
lib.userImage.import.cObject {
	userFunc = tx_dam_tsfe->fetchFileList
	refField = tx_bgmthemetradeoftheweek_image
	refTable = pages
	additional.fileList.field = image
	additional.filePath = uploads/pics/
}
*/