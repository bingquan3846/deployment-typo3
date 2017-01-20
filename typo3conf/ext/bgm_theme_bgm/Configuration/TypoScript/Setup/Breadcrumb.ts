lib.breadcrumbNavigation = COA
lib.breadcrumbNavigation {
	10 = TEXT
	10 {
		value = Home
		typolink {
			parameter.data = leveluid:0
			ATagParams = class="breadcrumb_home_link" itemprop="url"
			title = Zur Startseite
		}

		wrap = <li class="breadcrumb_home"><div itemscope itemtype="http://data-vocabulary.org/Breadcrumb">|</div></li>
	}
	20 = HMENU
	20 {
		special = rootline
		special.range = 1|8
		1 = TMENU
		1 {
			noBlur = 1
			expAll = 1
			#wrap = <ul>|</ul>
			NO {
				stdWrap.htmlSpecialChars = 1
				stdWrap.field = title
				stdWrap.wrap = <span itemprop="title">|</span>
				wrapItemAndSub = <li> <span>></span><span itemscope itemtype="http://data-vocabulary.org/Breadcrumb">|</span></li>
				ATagTitle.field = description // title
				ATagParams = itemprop="url"
			}

		}
	}
	stdWrap {
		wrap (
			<div id="breadcrumb_container" class="full light">
				<div class="page_wrap padding">
					<div class="row">
						<ul class="breadcrumb">|</ul>
					</div>
				</div>
			</div>
		)
		insertData = 1

	}
}

[treeLevel = 0]
	lib.breadcrumbNavigation >
[global]