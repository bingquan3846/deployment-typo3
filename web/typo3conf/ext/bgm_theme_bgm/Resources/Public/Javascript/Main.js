/* ToTop Layer */
var mapContentElements;
var top_layer = jQuery('<div />', {
	id: 'toTop',
	html: '<span class="icon icon-chevron-up"></span>'
});

$(document).ready(function () {

	//to Top
	jQuery('#content').after(top_layer);
	$(window).scroll(function () {
		screenWidth = parseInt($(window).width());
		if (screenWidth > 768) {
			if ($(this).scrollTop() > 600) {
				top_layer.fadeIn();
			} else {
				top_layer.fadeOut();
			}
		}
	});

	// scroll body to 0px on click
	top_layer.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 400);
		return false;
	});


	$('#mobileNavTrigger').click(function () {
		 $('.mainnavigation').toggleClass('active');
	 	//$('.mainnavigation').slideToggle('slow');
	 	e.preventDefault();
	});

	//each sliderContentElements Container pushes the container id to
	if (sliderContentElements && sliderContentElements!=='undefined') {
		$.each(sliderContentElements, function (index, elementId) {
			//if($(this).closest('div[stage]').length ){}
			//alert(elementId);
			$(elementId).slick({
				dots: true,
				infinite: true,
				speed: 500,
				fade: true,
				cssEase: 'linear',
				autoplay :true
			});
		});
	}
	//each logosliderContentElements Container pushes the container id to
	if (logosliderContentElements && logosliderContentElements!=='undefined') {
		$.each(logosliderContentElements, function (index, elementId) {
			//alert(elementId);
			$(elementId).slick({
				dots: false,
				infinite: true,
				speed: 300,
				arrows: false,
				autoplay:true,
				slidesToShow: 4,
				slidesToScroll: 1,
				adaptiveHeight :true,
				responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				  }
				},
				{
				  breakpoint: 600,
				  settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				}
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			  ]
			});
		});
	}







	if (mapContentElements!== 'undefined' && mapContentElements ) {
		$.each(mapContentElements, function (index, val) {
			id = val['id'];
			long = val['longitude'];
			lat = val['latitude'];
			content = val['content'];
			pin = val['pin']?val['pin']:'pin_goolgemap.png';
			var options = {
				controls: {
					panControl: true,
					zoomControl: true,
					mapTypeControl: true,
					scaleControl: true,
					streetViewControl: true,
					overviewMapControl: true
				},
				scrollwheel: false,
				maptype: 'ROADMAP',
				markers: [
					{
						latitude: lat,
						longitude: long,
						html: content,
						icon: {
							image: '/typo3conf/ext/bgm_theme_bgm/Resources/Public/Images/'+pin,
							iconsize: [50, 50],
							iconanchor: [25, 50]
						},
						popup: true
					}
				],
				icon: {
					image: '/typo3conf/ext/bgm_theme_bgm/Resources/Public/Images/pin_goolgemap.png',
					iconsize: [20, 34],
					iconanchor: [9, 34]
				},
				latitude: lat,
				longitude: long,
				zoom: 11
			};
			//console.log(options);
			$(id).gMap(
				options
			);
			/*
			$(id).gMap({
				controls: false,
				scrollwheel: true,
				maptype: 'TERRAIN',
				markers: [
					{
						latitude: 47.670553,
						longitude: 9.588479,
						icon: {
							image: "images/gmap_pin_orange.png",
							iconsize: [26, 46],
							iconanchor: [12, 46]
						}
					},
					{
						latitude: 47.65197522925437,
						longitude: 9.47845458984375
					},
					{
						latitude: 47.594996,
						longitude: 9.600708,
						icon: {
							image: "images/gmap_pin_grey.png",
							iconsize: [26, 46],
							iconanchor: [12, 46]
						}
					}
				],
				icon: {
					image: "images/gmap_pin.png",
					iconsize: [26, 46],
					iconanchor: [12, 46]
				},
				latitude: 47.58969,
				longitude: 9.473413,
				zoom: 10
			});
			*/
		});
	}
	/*
	var myMap = new Array();
	myMap['id'] = '#map';
	myMap['data'] = new Object();
	myMap['data']['latitude'] = '48.07538008';
	myMap['data']['longitude'] = '11.65685624';

	mapContentElements.push(myMap);
	*/

	$(".accordion").accordion({
		header: 'h3',
		heightStyle: 'content',
		collapsible: true,
		active: false,
		create: function (event, ui) {
			//$(this).find('.acc-iconText').text(locallang.menu.accordion_readMore);
		},
		activate: function (event, ui) {
			/*$(this).find('.acc-iconText').text(locallang.menu.accordion_readMore);
			 if (ui.newHeader.hasClass('ui-state-active')) {
			 ui.newHeader.find('.acc-iconText').text(locallang.menu.accordion_readLess);
			 }
			 else {
			 //ui.oldHeader.find('.acc-iconText').text( locallang.menu.accordion_readMore );
			 }*/
		}
	});


	$(window).on("scroll touchmove", function () {
		$('#top, #topbar, #logo, #content').toggleClass('fixed', $(document).scrollTop() > 40);
	});
});

