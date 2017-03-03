// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/owl.carousel.min.js
//=include lib/svgxuse.min.js
//=include lib/wNumb.js
//=include lib/nouislider.min.js

sayHello();
$(document).ready(function(){
	var windowWidth = $(window).width();

	$(window).resize(function() {
		windowWidth = $(window).width();
	});

	$('.main-slider').slick({
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

//=include components/select.js

//=include components/catalog.js
if(windowWidth <= 991){
	
	var sortFilter = $(".ctopline-js").detach();
	var cfilter = $(".cfilter-js").detach();
	$(".cfilter-dropbox-js").append(sortFilter);
	$(".cfilter-dropbox-js").append(cfilter);


	$(".js-filter-btn").on("click", function(){
		$(".cfilter-dropbox-js").slideToggle(300);
	});

	$('.banner-slider-js').slick({
		infinite: true,
		arrows: false,
		centerMode:true,
		slidesToShow: 1,
		variableWidth: true,
		responsive:[
		{
			breakpoint: 639,
			settings: {
				variableWidth: false,
				centerMode: false
			}
		}
		]
	});

	//$('.banner-slider-js').owlCarousel({
	//	center: true,
	//	items:3,
	//	loop:true,
	//	margin:10,
	//	autoWidth: false,
	//});

};


$(".js-drop-option").on("click", function(){
	var _this = $(this);
	_this.toggleClass("is-open").next(".cfilter__wrapper").slideToggle();

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

	// =include components/noUiSlider.js
});
