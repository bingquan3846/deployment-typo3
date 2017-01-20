temp.footerLeftContent = RECORDS
temp.footerLeftContent {
	source = {$sitegeneral.footerStaticContentLeftUid}
	dontCheckPid = 1
	tables = tt_content
	stdWrap.wrap (
		<div class="third">
			|
		</div>
	)
}

temp.footerCenterContent = RECORDS
temp.footerCenterContent {
	source = {$sitegeneral.footerStaticContentCenterUid}
	dontCheckPid = 1
	tables = tt_content
	stdWrap.wrap (
		<div class="third">
			|
		</div>
	)
}

temp.contactFooter = COA
temp.contactFooter {
	10 = TEXT
	10.value = <h4>Kontaktieren Sie uns</h4>
	20 < lib.location
	30 < lib.telephone
	40 < lib.fax
	50 < lib.email
	stdWrap.wrap (
		<div class="third">
			<div class="page_wrap padding">|</div>
		</div>
	)
}


lib.staticFooter = COA
lib.staticFooter {
	10 < temp.footerLeftContent
	20 < temp.footerCenterContent
	30 < temp.contactFooter
	stdWrap.wrap (
	<div id="footer">
		<div class="page_wrap padding">
				|
		</div>
	</div>
	)
}
lib.contactElement = COA
lib.contactElement {
	10 = RECORDS
	10 {
		source = {$sitegeneral.footerStaticContentContactContentUid}
		dontCheckPid = 1
		tables = tt_content
	}
}

