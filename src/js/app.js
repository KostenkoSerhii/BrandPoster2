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
};

// filter option
$(".js-drop-option").on("click", function(){
	var _this = $(this);
	_this.toggleClass("is-open").next(".cfilter__wrapper").slideToggle();

});
// filter option

// catalog popup
$('.cpopup-js').on("click", function(e){
	e.preventDefault();
	$('.overlay').fadeIn(400,	function(){
		$('.cat-modal-js').css('display', 'block').animate({opacity: 1}, 200);
		$("body").addClass("body-ovh");
	});
});

$('.cat-close-js, .overlay').on("click", function(){
	$('.cat-modal-js').animate({opacity: 0}, 200,
		function(){
			$(this).css('display', 'none');
			$('.overlay').fadeOut(400);
			$("body").removeClass("body-ovh");
		}
		);
});
// catalog popup

// callback popup
$('.callback-js').on("click", function(e){
	e.preventDefault();
	$('.overlay').fadeIn(400,	function(){
		$('.callback-modal-js').css('display', 'block').animate({opacity: 1}, 200);
		$("body").addClass("body-ovh");
	});
});

$('.callback-close-js, .overlay').on("click", function(){
	$('.callback-modal-js').animate({opacity: 0}, 200,
		function(){
			$(this).css('display', 'none');
			$('.overlay').fadeOut(400);
			$("body").removeClass("body-ovh");
		}
		);
});
// callback popup

/*callback validate*/
$('.callback-modal form').submit(function(e) {
	e.preventDefault();
	var name=$(this).find("input[name=name]").val();
	var phone=$(this).find("input[name=phone]").val();
	var status=1;

	if(isValidPhope(phone)){
		setTimeout(function(){
			$("form input[name=phone]").removeClass('error_form');
			$("form input[name=phone]").addClass('valid_form');
		},300);
	}else{
		setTimeout(function(){
			$("form input[name=phone]").addClass('error_form');
			$("form input[name=phone]").removeClass('valid_form');
		},300);
		status=0;
	}
	if(name!=''){
		setTimeout(function(){
			$("form input[name=name]").addClass('valid_form');
			$("form input[name=name]").removeClass('error_form');
		},300);
	}else{
		setTimeout(function(){
			$("form input[name=name]").addClass('error_form');
			$("form input[name=name]").removeClass('valid_form');
		},300);
		status=0;
	}
	if(status==1) {
		$.ajax({
			url: 'mail.php',
			type: 'POST',
			data: $(this).serialize()
		}).done(function() {
			/*$(this).find("input").val("");*/
			$("form").trigger("reset");
			$("form input").removeClass('valid_form');
			$(".callback-close-js").trigger('click');
		});
	}
});

function isValidPhope(phone) {
	var pattern = new RegExp(/^\d[\d\(\)\ -]{4,14}\d$/);
	return pattern.test(phone);
};
/*callback validate*/




	//ready

	// =include components/noUiSlider.js
});
