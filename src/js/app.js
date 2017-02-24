// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js

sayHello();
$(document).ready(function(){
	var windowWidth = $(window).width();

	$(window).resize(function() {
		windowWidth = $(window).width();
	});

	$('.slider').slick({
		infinite: true,
		arrows: true
	});

	$(".menu-btn").on("click", function(){
		var _this = $(this);
		_this.toggleClass("menu-btn-is-active");
		$("body").addClass("body-ovh");
		$(".js-nav-responsive").slideToggle(300);
		if(windowWidth <= 991 && windowWidth >= 768){
			$(".js-hidden").toggleClass("is-hidden");
		};
	});



	//ready
});
