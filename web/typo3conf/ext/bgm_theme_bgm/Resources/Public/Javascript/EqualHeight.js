function setEqualHeight() {
	screenWidth = $(window).width();
	 if (screenWidth > 767 ) {
		 var tallestP = 0;
		 $('.threeColContainer .col p:first-child').each(
				 function () {
					 currentHeight = $(this).height();
					 if (currentHeight > tallestP) {
						 tallestP = currentHeight;
					 }
				 }
		 );
		 $('.threeColContainer .col  p:first-child').css('min-height', tallestP);

		 var tallestcolumn = 0;
		 $('.threeColContainer .col').each(
				 function () {
					 currentHeight = $(this).height();
					 if (currentHeight > tallestcolumn) {
						 tallestcolumn = currentHeight;
					 }
				 }
		 );
		 $('.threeColContainer .col').height(tallestcolumn);
	 }
	 else {
		$('.threeColContainer .col  p:first-child').css('min-height', '0');
	 }
}

var delay = (function () {
	var timer = 0;
	return function (callback, ms) {
		clearTimeout(timer);
		timer = setTimeout(callback, ms);
	};
})();

$(window).resize(function () {
	delay(function () {
		$('.threeColContainer .col').css('height', 'auto'); //solve for all you browser stretchers out there!
		setEqualHeight();
	}, 300);
});

$(document).ready(function () {
	setEqualHeight();
});

/*
 function equalHeight(){
 var highestBox = 0;

 $('.threeColContainer .col').each(function(){
 if($(this).outerHeight() > highestBox){
 highestBox = $(this).outerHeight();
 }
 });
 $('.threeColContainer .col').height(highestBox);
 console.log('resized XX');

 }

 var windowResizeTimer;

 $(document).ready(function(){
 equalHeight();


 $( window ).resize(function() {
 console.log('resized');

 clearTimeout(windowResizeTimer);
 windowResizeTimer = setTimeout(equalHeight, 500);
 });

 });
 */