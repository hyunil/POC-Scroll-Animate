$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 600) {
			$('h1').css("margin-left","0");
		} else {
			$('h1').css("margin-left","-500px");
		}

		if ($(this).scrollTop() > 1500) {
			$('.col-md-4').fadeIn();
		} else {
			$('.col-md-4').fadeOut();
		}

	});
	
});