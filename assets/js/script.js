$(function(){
	
	//SMOOTH SCROLLING
	$(".nav-link").click(function(event) {
		if (this.hash !== "") {
			event.preventDefault();

			var gato = this.hash;

			$("html, body").animate({
				scrollTop:$(gato).offset().top
			}, 800, function(){
				window.location.hash = gato;
			});
		}
	});

	// NAVBAR MENU COLLAPSE AFTER CLICKING AN OPTION ON SMALL SCREENS
    $('.nav-link').click(function () {
        $(".navbar-collapse").collapse('hide');
    });
});