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
		$(".js-nav-responsive").slideToggle(300);
		if(windowWidth <= 991 && windowWidth >= 768){
			$(".js-hidden").toggleClass("is-hidden");
		};
	});

	//$(".scroll-js").on("click", function(e){
	//	e.preventDefault();
	//	var a = $(this).attr("href");
	//	var b = $(a).offset().top;
	//	$("html, body").animate({
	//		scrollTop: b
	//	}, 500);
	//});
	//$(".mob-scroll-js").on("click", function(e){
	//	e.preventDefault();
	//	var a = $(this).attr("href");
	//	var b = $(a).offset().top;
	//	$("html, body").animate({
	//		scrollTop: b
	//	}, 500);
	//	$(".menu-btn").trigger("click");
	//});


	//ready
});
