$(document).ready(function(){
	//navbar
	$(".button-collapse").sideNav();

	//botones con dropdown
	$('.dropdown-button').dropdown({hover: true});

	//nav cambia de color cuando se baja la página
	$(document).scroll(function(){
		if (document.body.scrollTop > 100){
			$("nav").addClass("nav-scroll");
		}
	})

	//para el carousel
	$('.slider').slider();

});