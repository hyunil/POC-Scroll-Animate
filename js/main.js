$(document).ready(function(){
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		
		// Initialize top position of element
		var position_element_2 = $('.element_2').offset().top;

		// compare if current position of window is greater than top position of element.
		if ($(this).scrollTop()+ $(window).height() >= position_element_2  ) {
			$('h1').css('color','#a0F219'); // change css attribute
			// do animate after .8 sec
			$('p').delay(800).animate({
				opacity: 1
				}, 400 ); // duration is .4 sec
		}
		// else if, that mean smaller than top position of element, 
		else {
			// change css attributes
			$('h1').css('color','#382793'); 
			$('p').css('opacity','0'); 
		}

		var position_element_3 = $('.element_3').offset().top;
		if ($(this).scrollTop() >= position_element_3 ) {
			$('.col-md-4').fadeIn();
		} else {
			$('.col-md-4').fadeOut();
		}
	});
});