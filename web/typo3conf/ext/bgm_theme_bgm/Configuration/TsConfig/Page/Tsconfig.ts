#set default ACLs when pages are created
TCEMAIN.permissions {
	userid = 2
	groupid = 1
	user = show,edit,delete,new,editcontent
	group = show,edit,delete,new,editcontent
	everybody = show
}

mod {
	web_layout.menu.function {
		0 = 0 #Quick edit
		1 = 0 #Columns
		2 = 1 #Languages
		3 = 1 #Page Information
		4 = 1 #Grid view
	}
}

mod {
	SHARED {
		colPos_list = 0,1,2,3
	}
}

TCEFORM.tt_content.header_layout.altLabels {
	1 = H1
	2 = H2
	3 = H3
	4 = H4
	5 = H5
}

TCEFORM.tt_content.header_layout.addItems.10 = H2-Zentriert
TCEFORM.tt_content.header_layout.addItems.14 = H3-Zentriert GROSS

#Klassen für Accordion Header
TCEFORM.tt_content.header_layout.addItems.11 = NUR Accordion:Desktop Icon (Projekt)
TCEFORM.tt_content.header_layout.addItems.12 = NUR Accordion:Person Icon (Kunde)
TCEFORM.tt_content.header_layout.addItems.13 = NUR Accordion:Zahnrad Icon (Leistungen)


#remove spaceBefore/After
TCEFORM.tt_content {
	spaceBefore.disabled = 1
	spaceAfter.disabled = 1
}


#remove frame types
TCEFORM.tt_content.layout.removeItems = 1,2,3
#Add special Frames
TCEFORM.tt_content.layout {
	addItems.22 = Heller Hintergrund über die ganze Seitenbreite
	addItems.23 = Dunkler Hintergrund über die ganze Seitenbreite
	addItems.24 = Coprorate (Grün/Rot/Blau) Hintergrund über die ganze Seitenbreite
}




TCEFORM.tt_content.tx_bgmthemebgm_animation {
	addItems.fadeIn = FadeIn
	addItems.bounceInLeft = Fliegt von Links
	addItems.bounceInRight = Fliegt von Rechts
	addItems.zoomIn = Zoomt ein
	addItems.slideInUp = Slided ein von unten
}
/*
bounce
flash
pulse
rubberBand
shake
headShake
swing
tada
wobble
jello
bounceIn
bounceInDown
bounceInLeft
bounceInRight
bounceInUp

fadeIn
fadeInDown
fadeInDownBig
fadeInLeft
fadeInLeftBig
fadeInRight
fadeInRightBig
fadeInUp
fadeInUpBig
flipInX
flipInY
lightSpeedIn
lightSpeedOut
rotateIn
rotateInDownLeft
rotateInDownRight
rotateInUpLeft
rotateInUpRight
hinge
rollIn
zoomIn
zoomInDown
zoomInLeft
zoomInRight
zoomInUp
slideInDown
slideInLeft
slideInRight
slideInUp

*/

mod.wizards.newContentElement.wizardItems.common {
	elements.referenceelement {
		iconIdentifier = content-textpic
		title = referenceelement
		description = Referenz Bild und Link
		tt_content_defValues {
			CType =  referenceelement
		}
	}
	elements.imagesliderelement {
		iconIdentifier = content-textpic
		title = imagesliderelement
		description =  Bild für Slider
		tt_content_defValues {
			CType =  imagesliderelement
		}
	}
	show :=addToList(referenceelement,imagesliderelement)
}



[PIDinRootline = 1]
	TCEMAIN.previewDomain = https://typo3.bgm-gmbh.de
[global]
[PIDinRootline = 15]
	TCEMAIN.previewDomain = https://communications.bgm-gmbh.de
[global]
[PIDinRootline = 36]
	TCEMAIN.previewDomain = https://itmanagement.bgm-gmbh.de
[global]

RTE.classesAnchor {
	externalLink {
		class = external-link
		type = url
		titleText =
	}
	externalLinkInNewWindow {
		class = external-link-new-window
		type = url
		titleText =
	}
	internalLink {
		class = internal-link
		type = page
		titleText =
	}
	internalLinkInNewWindow {
		class = internal-link-new-window
		type = page
		titleText =
	}
	download {
		class = download
		type = file
		titleText =
	}
	mail {
		class = mail
		type = mail
		titleText =
	}
}

RTE.default {
	classesAnchor.default {
		page =
		url =
		file =
		mail =
	}

	### BUTTONS DIE GEZEIGT/VERSTECKT WERDEN
	### UNTERHALB ALLE BUTTONS IN RTE
	#showButtons = image copy, cut, paste, chMode, textstyle,textcolor, textstylelabel, blockstyle, blockstylelabel, bold, italic, unorderedlist, insertcharacter, line, link, image, removeformat, findreplace, insertcharacter, undo, redo, showhelp, about, headline, subscript, superscript, orderedlist, table, toggleborders, tableproperties, rowproperties, rowinsertabove, rowinsertunder, rowdelete, rowsplit, columninsertbefore, columninsertafter, columndelete, columnsplit, cellproperties, cellinsertbefore, cellinsertafter, celldelete, cellsplit, cellmerge, indent,left, center, right, justifyfull

	showButtons = *
	hideButtons = fontstyle, fontsize, strikethrough, lefttoright, righttoleft,  bgcolor, textindicator, emoticon, spellcheck, inserttag, bgcolor, outdent
	toolbarOrder = formatblock, space, blockstyle, space, textstyle, space, user, chMode, showhelp, about, linebreak,  undo, redo, bar, copy, paste, bar, bold, italic, subscript, superscript, bar, orderedlist, unorderedlist, bar, line, link, image, insertcharacter, removeformat, findreplace, linebreak, table, toggleborders, tableproperties, rowproperties, rowinsertabove, rowinsertunder, rowdelete, rowsplit, columninsertbefore, columninsertafter, columndelete, columnsplit, cellproperties, cellinsertbefore, cellinsertafter, celldelete, cellsplit, cellmerge, indent,user,left, center, right, justifyfull




	### HAELT DIE RTE ICONS GRUPPIERT ZUSAMMEN
	keepButtonGroupTogether = 1
	keepToggleBordersInToolbar = 1

	contentCSS = EXT:bgm_theme_bgm/Resources/Public/Css/rte.css
	hidePStyleItems = PRE, ADDRESS, P, DIV, H1, SECTION, ASIDE, ARTICLE, FOOTER, HEADER, NAV, QUOTATION, H2, QUOTE
	buttons.formatblock.removeItems = PRE, ADDRESS, P, DIV, H1, SECTION, ASIDE, ARTICLE, FOOTER, HEADER, NAV, QUOTATION, H2,BLOCKQUOTE
	classesParagraph = align-center
	classesAnchor = normalbutton
	allowedClasses := addToList(normalbutton,align-center)
	showStatusBar = 1
	proc {
		allowedClasses < RTE.default.allowedClasses
	}

	FE {
		proc {
			allowedClasses < RTE.default.allowedClasses
		}
	}
	#showButtons := addToList(user)


}

