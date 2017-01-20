

lib.referenceImage = FILES
lib.referenceImage  {
	references {
		table = tt_content
		uid.field = uid
		fieldName = image
	}
	renderObj = COA
	renderObj {
		10 = IMAGE
		10 {
			file.import.data = file:current:publicUrl
			file.maxH =500c
			file.maxW = 500c
			altText.data = file:current:alternative
			titleText.data = file:current:title
			params = class="w-portfolio-item-image-first"
			stdWrap.typolink {
				parameter.data = file:current:link
			}
		}
	}
}




lib.logoSliderImage = FILES
lib.logoSliderImage  {
	references {
		table = tt_content
		uid.field = uid
		fieldName = image
	}
	renderObj = COA
	renderObj {
		10 = IMAGE
		10 {
			file.import.data = file:current:publicUrl
			file.maxH =480c
			file.maxW = 270c
			altText.data = file:current:alternative
			titleText.data = file:current:title
			#params = class="teaserbox-content-image"
			stdWrap.typolink {
				parameter.data = file:current:link
			}
		}
	}
}



lib.sliderImage = FILES
lib.sliderImage {
	references {
		table = tt_content
		uid.field = uid
		fieldName = image
	}
	renderObj = COA
	renderObj {
		10 = IMAGE
		10 {
			file.import.data = file:current:publicUrl
			layoutKey = picturefill
			layout.picturefill {
				element (
					  <span data-picture="">
						###SOURCECOLLECTION###
						<noscript>
						  <img src="###SRC###" ###PARAMS### ###ALTPARAMS######SELFCLOSINGTAGSLASH###>
						</noscript>
					  </span>
				)
				source = <span data-src="###SRC###" data-media="###MEDIAQUERY###"></span>
			}
			sourceCollection {
				xxxlarge.maxW = 2400px
				xxxlarge.mediaQuery = (max-width: 2400px)


				xxlarge.maxW = 1920px
				xxlarge.mediaQuery = (max-width: 1920px)

				xlarge.maxW = 1480px
				xlarge.mediaQuery = (max-width: 1280px)

				large.maxW = 1024px
				large.mediaQuery = (max-width: 1024px)

				middle2large.maxW = 900px
				middle2large.mediaQuery = (max-width: 900px)

				xmiddle.maxW = 800px
				xmiddle.mediaQuery = (max-width: 800px)

				middle.maxW = 700px
				middle.mediaQuery = (max-width: 700px)
				small.maxW = 480px
				small.mediaQuery = (max-width: 480px)

				verysmall.maxW = 320px
				verysmall.mediaQuery = (max-width: 320px)
			}
			stdWrap.wrap (
				 <div class="imageContainer">
					|
				</div>
			)
		}

	}
}