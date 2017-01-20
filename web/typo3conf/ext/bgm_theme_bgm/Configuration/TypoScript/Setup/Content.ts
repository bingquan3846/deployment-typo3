tt_content.uploads.20.renderObj.15.file.import = typo3conf/ext/bgm_theme_bgm/Resources/Public/Images/Icons/
tt_content.uploads.20.renderObj.15.file.import.wrap = |.png
tt_content.uploads.20.renderObj.40.bytes.labels = " | KB| MB| GB"
tt_content.uploads.20.renderObj.40.wrap = <span class="csc-uploads-fileSize">(Größe: &nbsp;|)</span>


#Content Slider/Stage/Keyvisual
temp.Stage < styles.content.get
temp.Stage {
	select.where = colPos=1
	stdWrap.wrap (
	<div id="stage">
		|
	</div>
	)
	stdWrap.required = 1
}


#New types for Header
lib.stdheader.10.10 < lib.stdheader.10.1
lib.stdheader.10.10.dataWrap = <h2 class="alignCenter">|</h2>



#ENABLE Header for grid Eleemnts
tt_content.gridelements_pi1.10 < lib.stdheader
tt_content.gridelements_pi1.10.stdWrap.dataWrap = <div class="gridHeader">|</div>
tt_content.gridelements_pi1.20.stdWrap.wrap = <div>|</div>




lib.parseFunc_RTE {
	nonTypoTagStdWrap.encapsLines {
		addAttributes.P.class >
		addAttributes.P.class.setOnly >
	}
	tags.link{
		typolink.wrap = |
		typolink.ATagBeforeWrap = 1
	}
	externalBlocks.table.HTMLtableCells.default >
	externalBlocks.table.HTMLtableCells.default.stdWrap.parseFunc =< lib.parseFunc
}

lib.parseFunc.tags.link{
	typolink.wrap = |
	typolink.ATagBeforeWrap = 1
}








#unset default csc-default class rendering; no spacebefore/after needed (responsive)
tt_content.stdWrap.innerWrap >
tt_content.stdWrap.innerWrap.cObject = CASE
tt_content.stdWrap.innerWrap.cObject {
	key.field = layout
	default = COA
	default {
		# 10 > IN any GridContainer
		10 = COA
		10 {
			10 = TEXT
			10 {
				value (
				<div class="ce
				)
			}
			20 = TEXT
			20 {
				value (
				  anim" data-anim="{field:tx_bgmthemebgm_animation}">|</div>
				)
				insertData = 1
				if.isTrue.field = tx_bgmthemebgm_animation
			}
			30 = TEXT
			30 {
				value (
				">|</div>
				)
				if.isFalse.field = tx_bgmthemebgm_animation
			}
			stdWrap.if {
				value = -1
				equals.field = colPos
				#negate = 1
			}
		}
		# 20 > NOT IN any GridContainer
		20 = COA
		20 {
			10 = TEXT
			10 {
				value (
				<div class="ce
				)
			}
			20 = TEXT
			20 {
				value (
				  anim" data-anim="{field:tx_bgmthemebgm_animation}">
						<div class="page_wrap padding">
							|
						</div>
 					</div>
				)
				insertData = 1
				if.isTrue.field = tx_bgmthemebgm_animation
			}
			30 = TEXT
			30 {
				value (
				">
						<div class="page_wrap padding">
							|
						</div>
 					</div>
				)
				if.isFalse.field = tx_bgmthemebgm_animation
			}
			stdWrap.if {
				value = -1
				equals.field = colPos
				negate = 1
			}
		}




	}
	22 = COA
	22 {
		# 10 > IN any GridContainer
		10 < tt_content.stdWrap.innerWrap.cObject.default.10
		# 20 > NOT IN any GridContainer
		20 = COA
		20 {
			10 = TEXT
			10 {
				value (
				<div class="ce full light
				)
			}
			20 = TEXT
			20 {
				value (
				  anim" data-anim="{field:tx_bgmthemebgm_animation}">
						<div class="page_wrap padding">
							|
						</div>
 					</div>
				)
				insertData = 1
				if.isTrue.field = tx_bgmthemebgm_animation
			}
			30 = TEXT
			30 {
				value (
				">
						<div class="page_wrap padding">
							|
						</div>
 					</div>
				)
				if.isFalse.field = tx_bgmthemebgm_animation
			}
			stdWrap.if {
				value = -1
				equals.field = colPos
				negate = 1
			}
		}
	}

	23 = COA
	23 {
		# 10 > IN any GridContainer
		10 < tt_content.stdWrap.innerWrap.cObject.default.10
		# 20 > NOT IN any GridContainer
		20 = COA
		20 {
			10 = TEXT
			10 {
				value (
				<div class="ce full dark
				)
			}


			20 = TEXT
			20 {
				value (
				  anim" data-anim="{field:tx_bgmthemebgm_animation}">
						<div class="page_wrap padding">
							|
						</div>
 					</div>
				)
				insertData = 1
				if.isTrue.field = tx_bgmthemebgm_animation
			}
			30 = TEXT
			30 {
				value (
				">
						<div class="page_wrap padding">
							|
						</div>
 					</div>
				)
				if.isFalse.field = tx_bgmthemebgm_animation
			}
			stdWrap.if {
				value = -1
				equals.field = colPos
				negate = 1
			}
		}
	}

	24 = COA
	24 {
		# 10 > IN any GridContainer
		10 < tt_content.stdWrap.innerWrap.cObject.default.10
		# 20 > NOT IN any GridContainer
		20 = COA
		20 {
			10 = TEXT
			10 {
				value (
				<div class="ce full coporate
				)
			}
			20 = TEXT
			20 {
				value (
				  anim" data-anim="{field:tx_bgmthemebgm_animation}">
						<div class="page_wrap padding">
							|
						</div>
 					</div>
				)
				insertData = 1
				if.isTrue.field = tx_bgmthemebgm_animation
			}
			30 = TEXT
			30 {
				value (
				">
						<div class="page_wrap padding">
							|
						</div>
 					</div>
				)
				if.isFalse.field = tx_bgmthemebgm_animation
			}
			stdWrap.if {
				value = -1
				equals.field = colPos
				negate = 1
			}
		}
	}
}


#Grid Elementa
tt_content.gridelements_pi1.20.10.setup {
	# 2 Col 34_66
	#Alias of gridelement
	100 < lib.gridelements.defaultGridSetup
	100 {
		columns {
			# colPos ID
			0 < .default
			0.renderObj = <tt_content
			#0.wrap = <div class="four_twelve">|</div>
		}
	}

	# 2 Col 50 /50
	#Alias of gridelement
	50_50 < lib.gridelements.defaultGridSetup
	50_50 {
		columns {
			# colPos ID
			0 < .default
			0.renderObj = <tt_content
			0.wrap = <div class="half">|</div>
			# colPos ID
			1 < .default
			1.renderObj = <tt_content
			1.wrap = <div class="half">|</div>
		}
	}

	# 4 Col 25_25_25_25
	#Alias of gridelement
	25_25_25_25 < lib.gridelements.defaultGridSetup
	25_25_25_25 {
		columns {
			# colPos ID
			0 < .default
			0.renderObj = <tt_content
			0.wrap = <div class="fourth">|</div>
			# colPos ID
			1 < .default
			1.renderObj = <tt_content
			1.wrap = <div class="fourth">|</div>
			# colPos ID
			2 < .default
			2.renderObj = <tt_content
			2.wrap = <div class="fourth">|</div>
			# colPos ID
			3 < .default
			3.renderObj = <tt_content
			3.wrap = <div class="fourth">|</div>
		}
	}

	# 3 Col 33_33_33
	#Alias of gridelement
	33_33_33 < lib.gridelements.defaultGridSetup
	33_33_33 {
		columns {
			# colPos ID
			0 < .default
			0.renderObj = <tt_content
			0.wrap = <div class="third thirdFirst col">|</div>
			# colPos ID
			1 < .default
			1.renderObj = <tt_content
			1.wrap = <div class="third thirdSecond col">|</div>
			# colPos ID
			2 < .default
			2.renderObj = <tt_content
			2.wrap = <div class="third thirdThird col">|</div>
		}
		stdWrap.outerWrap (
			<div class="threeColContainer">|</div>
		)
	}

	# 2 Col 66_34
	#Alias of gridelement
	66_34 < lib.gridelements.defaultGridSetup
	66_34 {
		columns {
			# colPos ID
			0 < .default
			0.renderObj = <tt_content
			0.wrap = <div class="eight_twelve_left">|</div>
			# colPos ID
			1 < .default
			1.renderObj = <tt_content
			1.wrap = <div class="four_twelve_right">|</div>
		}
	}

	# 2 Col 34_66
	#Alias of gridelement
	34_66 < lib.gridelements.defaultGridSetup
	34_66 {
		columns {
			# colPos ID
			0 < .default
			0.renderObj = <tt_content
			0.wrap = <div class="four_twelve">|</div>
			# colPos ID
			1 < .default
			1.renderObj = <tt_content
			1.wrap = <div class="eight_twelve">|</div>
		}
	}

	#slider: Slider Content
	slider < temp.gridelements.defaultGridSetup
	slider {
		columns {
			0 < .default
			0 {
				renderObj < tt_content
				renderObj {
					stdWrap.insertData = 1
					stdWrap.innerWrap >
					stdWrap.outerWrap.cObject = COA
					stdWrap.outerWrap.cObject {
						#Opening
						5 = TEXT
						5.value (
							<div id="c{field:uid}" class="sliderEntry">
						)
						10 < lib.sliderImage
						#Closing + Content
						15 = TEXT
						15.value (
								<div class="page_wrap padding">|</div>
							</div>
						)
					}
				}
			}
		}
		stdWrap.outerWrap (
			<div class="fade-slider"  id="fade-slider-{field:uid}">|</div>
			<script>
					sliderContentElements.push('#fade-slider-{field:uid}');
			</script>
		)
		stdWrap.outerWrap.insertData = 1
	}


	#imageslider: Slider Content
	imageslider < temp.gridelements.defaultGridSetup
	imageslider {
		columns {
			0 < .default
			0 {
				renderObj =< tt_content
				renderObj {
					stdWrap.innerWrap >
					stdWrap.outerWrap >
				}
			}
		}
		stdWrap.outerWrap (
			<div class="slider responsive imageSlider" id="logo-slider-{field:uid}">|</div>
			<script>
					logosliderContentElements.push('#logo-slider-{field:uid}');
			</script>
		)
		stdWrap.outerWrap.insertData = 1

	}



	#Alias of gridelement
	referenz < lib.gridelements.defaultGridSetup
	referenz {
		columns {
			# colPos ID
			0 < .default
			0.renderObj = < tt_content
		}
		stdWrap.outerWrap (
			<div class="w-portfolio">
				<div class="w-portfolio-list">
					|
				</div>
			</div>
		)
	}

	#Accordiom: 1 Col 100% as Accordions
	accordion < lib.gridelements.defaultGridSetup
	accordion {
		columns {
			# colPos ID
			#5 < .default
			#1.wrap = |
			0.renderObj =< lib.gridelements.AccordionContentRendering
		}
		wrap = <div class="accordion">|</div>
	}
}


/


lib.gridelements.AccordionContentRendering < tt_content
lib.gridelements.AccordionContentRendering {
	stdWrap >
	textmedia.templateName = TextmediaAccordion
}


# New ContentElement Content Reference Image
tt_content.referenceelement= FLUIDTEMPLATE
tt_content.referenceelement  {
	file = EXT:bgm_theme_bgm/Resources/Private/Templates/ContentElementTemplates/ReferenceElement.html
}

# New ContentElement Content Reference Image
tt_content.imagesliderelement= FLUIDTEMPLATE
tt_content.imagesliderelement  {
	file = EXT:bgm_theme_bgm/Resources/Private/Templates/ContentElementTemplates/Imagesliderelement.html
}





# New ContentElement Content Slider Element
tt_content.contactdata = COA
tt_content.contactdata {
	10 < lib.stdheader
	20 = COA
	20  {
		20 < lib.location
		20.stdWrap.wrap (
			<div class="locationContact contactIcon"></div>
			<div class="locationContactRight contactText">|</div>
			<div class="spacer"></div>
		)
		30 < lib.telephone
		30.10.wrap >
		30.stdWrap.wrap (
			<div class="telephoneContact contactIcon"></div>
			<div class="locationContactRight contactText">|</div>
			<div class="spacer"></div>
		)
		50 < lib.email
		50.stdWrap.wrap (
			<div class="emailContact contactIcon"></div>
			<div class="locationContactRight contactText">|</div>
		)
	}

}