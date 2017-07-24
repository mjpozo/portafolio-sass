$(document).ready(function(){

	//navbar
	$(".button-collapse").sideNav();

	//botones con dropdown
	$('.dropdown-button').dropdown({
		hover: true,
		constrainWidth: false
	});

	//nav cambia de color cuando se baja la página
	$(document).scroll(function(){
		if ($(this).scrollTop() > 100){
			$("nav").addClass("nav-scroll");
		} else if ($(this).scrollTop() <= 100){
			$("nav").removeClass("nav-scroll");
		}
	})

	//para el carousel
	$('.slider').slider();

});