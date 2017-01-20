/**
 * The TypoScript setup page file
 * This file is included in EXT:bgm_theme_bgm/Configuration/TypoScript/Setup.ts.
 *
 * Here you find the TypoScript PAGE object
 */


page >

page = PAGE
page {
	# Regular pages always have typeNum = 0
	typeNum = 0

	# Add the icon that will appear in front of the url in the browser
	# This icon will also be used for the bookmark menu in browsers
	#shortcutIcon = {$filePath.images}favicon.ico

	10 = FLUIDTEMPLATE
	10 {
		#file.cObject = TEXT
		#file.cObject {
		#	value = {$filePath.pageTemplates}Layouts/Default.html
		#}

		file.stdWrap.cObject = CASE
		file.stdWrap.cObject {
			key.data = levelfield:-1, backend_layout_next_level, slide
			key.override.field = backend_layout

			default = TEXT
			default.value = {$filePath.pageTemplates}Layouts/Default.html

			2 = TEXT
			2.value = {$filePath.pageTemplates}Layouts/Referenz.html
		}

		partialRootPath = {$filePath.partials}
		layoutRootPath = {$filePath.pageTemplates}Layouts/

		extbase {
			pluginName = ShowFluidtemplate
			controllerExtensionName = bgm_theme_bgm
			controllerName = Fluidtemplate
			controllerActionName = show
		}
		variables {
			ReferenceNavigation < temp.referenceNavigation
			Stage < temp.Stage
			Content < styles.content.get
		}
	}
	#headTag = <head><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	meta {
		description.field = description
		author.field = author
		keywords.field = keywords
		robots = all
		revisit-after = 1 days
		viewport = width=device-width, initial-scale=1.0
	}

	headerData {
		#title Tag
		10 < temp.pageTitle
		#canonical
		20 < lib.canonical

	}

	includeCSS {
		normalize = {$filePath.css}ThirdParty/normalize.css
		googleWebFont1 = //fonts.googleapis.com/css?family=Noto+Sans%3A400%2C700&subset=latin&ver=4.2.2
		googleWebFont1 {
			external = 1
			disableCompression = 1
			excludeFromConcatenation = 1
		}
		googleWebFont2 = //fonts.googleapis.com/css?family=Open+Sans%3A400%2C400italic%2C700%2C700italic&subset=latin&ver=4.2.2
		googleWebFont2 {
			external = 1
			disableCompression = 1
			excludeFromConcatenation = 1
		}
		animate = {$filePath.css}ThirdParty/animate.min.css
		animate {
			disableCompression = 1
		}
		styles = {$filePath.css}styles.css

	}

	headerData {
		#title Tag
		10 < temp.pageTitle
		20 < lib.canonical
		#hreflang
		30 = TEXT
		30.value (
			<script type="text/javascript">
				var sliderContentElements = sliderContentElements || [];
				var logosliderContentElements =  logosliderContentElements || [];
			</script>
		)
        40 = TEXT
        40.value (
         <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
        )
	}
	includeJSlibs {
		modernizr = {$filePath.javascript}Vendor/custom.modernizr.js
		modernizr {
			disableCompression = 0
			excludeFromConcatenation = 0
			async = 1
		}
	}

	includeJSFooterlibs {
		jquery = {$filePath.javascript}Vendor/jquery-2.1.4.min.js
		jquery {
			disableCompression = 1
			excludeFromConcatenation = 0
			async = 1
		}
		picturefill = {$filePath.javascript}Vendor/picturefill.min.js
		picturefill {
			excludeFromConcatenation = 0
			disableCompression = 1
			async = 1
		}
		slickslider = {$filePath.javascript}Vendor/slick.min.js
		slickslider {
			disableCompression = 1
			excludeFromConcatenation = 0
			async = 0
		}

		accordion = {$filePath.javascript}Vendor/jquery.accordion.min.js
		accordion {
			disableCompression = 1
			async = 1
		}
		viewportchecker = {$filePath.javascript}Vendor/jquery.viewportchecker.js
		viewportchecker {
			disableCompression = 0
			excludeFromConcatenation = 0
			async = 0
		}
		animation = {$filePath.javascript}Animation.js
		animation {
			disableCompression = 0
			async = 0
		}
		main = {$filePath.javascript}Main.js
		main {
			disableCompression = 0
			async = 0
		}
	}

	includeJSFooter {
	}
}
#include map js only on contact pages
[globalVar = TSFE:id=6] [globalVar = TSFE:id=21] [globalVar = TSFE:id=42]
    page {
        includeJSFooterlibs {
            googemapApi = //maps.google.com/maps/api/js?sensor=false
            googemapApi {
                external = 1
                disableCompression = 1
                excludeFromConcatenation = 1
                async = 0
            }
            gmap = {$filePath.javascript}Vendor/jquery.gmap.min.js
            gmap {
                disableCompression = 1
                excludeFromConcatenation = 1
                async = 0
            }
        }

    }
[global]

#websolutions google analytics
[PIDinRootline = 1]
page.jsFooterInline.91 = TEXT
page.jsFooterInline.91.value(
	  var _gaq = _gaq || [];
	  _gaq.push(['_setAccount', 'UA-179593-3']);
	  _gaq.push(['_gat._anonymizeIp']);
	  _gaq.push(['_trackPageview']);

	  (function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	  })();
	)
[global]