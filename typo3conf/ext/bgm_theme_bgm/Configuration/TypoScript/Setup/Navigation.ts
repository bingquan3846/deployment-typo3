lib.mainnavigation = COA
lib.mainnavigation {
	10 = HMENU
	10 {
		1 = TMENU
		1 {
			noBlur = 1
			expAll = 1
			NO {
				stdWrap.htmlSpecialChars = 1
				stdWrap.field = nav_title// title
				wrapItemAndSub = <li>|</li>
				ATagTitle.field = description // title
			}

			ACT < .NO
			ACT = 1
			ACT {
				wrapItemAndSub = <li class="active">|</li>
			}
			IFSUB < .ACT
			IFSUB = 1
			IFSUB {
				wrapItemAndSub = <li class="hasSubPage">|</li>
			}
			ACTIFSUB < .IFSUB
			ACTIFSUB = 1
			ACTIFSUB {
				wrapItemAndSub = <li class="active hasSubPage">|</li>
			}
		}
	}
	stdWrap {
		wrap (
		 	<ul>|</ul>
		)
		insertData = 1
		required = 1
	}
}

#Special Navigation
lib.footernavigation = COA
lib.footernavigation {
	10 = HMENU
	10 {
		special = directory
		special.value = {$menu.footernavigationSysfolder}
		includeNotInMenu = 1
		1 = TMENU
		1 {
			noBlur = 1
			expAll = 1
			wrap = <ul>|</ul>
			NO {
				doNotShowLink = 1
				doNotLinkIt = 1
				allWrap.cObject = COA
				allWrap.cObject {
					10 = TEXT
					10 {
						field = nav_title//title
						htmlSpecialChars = 1
					}
					stdWrap.wrap = <li>|</li>
					stdWrap.typolink.parameter.cObject = CASE
					stdWrap.typolink.parameter.cObject {
						key.field = doktype
						1 = TEXT
						1.field = uid
						2 <.1
						3 = TEXT
						3.field = url
						3.if.isTrue.field = url
						4 = TEXT
						4.field = shortcut
						4.if.isTrue.field = shortcut
					}
					stdWrap {
						typolink.title.field = subtitle//title
						typolink.title.htmlSpecialChars = 1
						#typolink.target = _blank
						typolink.extTarget = _blank
						typolink.useCacheHash = 1
					}
				}
			}
		}
	}
}

temp.prevMenu = HMENU
temp.prevMenu.includeNotInMenu = 1
temp.prevMenu.special = browse
temp.prevMenu.special {
	items = prev
	items.prevnextToSection = 0
  	prev.fields.title = <span class="icon-angle-left" title="zu vorheriger Seite"></span>



}
temp.prevMenu.1 = TMENU
temp.prevMenu.1 {
	NO = 1
}

temp.prevMenu.stdWrap.ifEmpty.cObject = HMENU
temp.prevMenu.stdWrap.ifEmpty.cObject {
	includeNotInMenu = 1
	special = browse
	special {
		items = last
		items.prevnextToSection = 0
		last.fields.title = <span class="icon-angle-left" title="zu vorheriger Seite"></span>
	}
	1 = TMENU
	1 {
		NO = 1
	}
}


temp.nextMenu = HMENU
temp.nextMenu.includeNotInMenu = 1
temp.nextMenu.special = browse
temp.nextMenu.special {
	items = next
	items.prevnextToSection = 0
  	prev.fields.title = <span class="icon-angle-left" title="zu vorheriger Seite"></span>
	next.fields.title = <span class="icon-angle-right" title="zu nächster Seite"></span>
}
temp.nextMenu.1 = TMENU
temp.nextMenu.1 {
	NO = 1
}


temp.nextMenu.stdWrap.ifEmpty.cObject = HMENU
temp.nextMenu.stdWrap.ifEmpty.cObject {
	includeNotInMenu = 1
	special = browse
	special {
		items = first
		items.prevnextToSection = 0
		first.fields.title = <span class="icon-angle-right" title="zu vorheriger Seite"></span>
	}
	1 = TMENU
	1 {
		NO = 1
	}
}


lib.prevNextMenu = COA
lib.prevNextMenu {
	10 < temp.prevMenu
	20 < temp.nextMenu
}