document.addEventListener('DOMContentLoaded', function () {

	let burger = document.querySelector('.headerTop__burger');
	let menu = document.querySelector('.header-navigation');

	function showMenu() {
		menu.classList.toggle('header-navigation_active');
	}

	burger.addEventListener('click', showMenu);

	// Popups
	let btnServices = document.querySelector('#popaps-form');
	let modal = document.querySelector('.formPopaps');
	let formBg = document.querySelector('.form-bg');

	function showModal() {
		modal.classList.add('formPopaps_active');
	}
	function hideModal() {
		modal.classList.remove('formPopaps_active');
	}

	if(btnServices){
		btnServices.addEventListener('click', showModal);
		formBg.addEventListener('click', hideModal);
	}
	

	// Sliders
	var mySwiper1 = new Swiper('.slider_one', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		speed: 4000,
		effect: 'fade',
		allowTouchMove: false,
		watchSlidesProgress: true,
		autoplay: {
			delay: 3000,
		},
	});
	var mySwiper2 = new Swiper('.slider_two', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		speed: 6000,
		effect: 'fade',
		allowTouchMove: false,
		watchSlidesProgress: true,
		autoplay: {
			delay: 3000,
		}
	});
	var mySwiper3 = new Swiper('.slider_three', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		speed: 8000,
		effect: 'fade',
		allowTouchMove: false,
		watchSlidesProgress: true,
		autoplay: {
			delay: 3000,
		}
	});

	var stepSlider = new Swiper('.step-slider__swiper', {
		// Optional parameters
		direction: 'horizontal',
		// loop: true,
		speed: 300,
		effect: 'slide',
		slidesPerView: 4,
		slidesPerGroup: 1,
		spaceBetween: 30,
		watchSlidesProgress: true,
		navigation: {
			nextEl: '.step-slider__next_step',
			prevEl: '.step-slider__prev_step',
		},
		breakpoints: {
			1200: {
				slidesPerView: 3
			},
			1024: {
				slidesPerView: 2
			},
			768: {
				slidesPerView: 2
			},
			576: {
				slidesPerView: 1
			}
		}
	});

	var projecktSlider = new Swiper('.step-slider__swiper_projeckt', {
		// Optional parameters
		direction: 'horizontal',
		speed: 300,
		effect: 'slide',
		slidesPerView: 3,
		slidesPerGroup: 1,
		spaceBetween: 30,
		watchSlidesProgress: true,
		navigation: {
			nextEl: '.step-slider__next_projeckt',
			prevEl: '.step-slider__prev_projeckt',
		},
		breakpoints: {
			1024: {
				slidesPerView: 2
			},
			768: {
				slidesPerView: 2
			},
			576: {
				slidesPerView: 1
			}
		}
	});


	$(".tabs-content__block").not(":first").hide();
	$(".tabs-nav .tabs-nav__item").click(function() {
		$(".tabs-nav .tabs-nav__item").removeClass("is-active").eq($(this).index()).addClass("is-active");
		$(".tabs-content__block").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("is-active");

});