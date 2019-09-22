document.addEventListener('DOMContentLoaded', function() {

	var mySwiper1 = new Swiper ('.slider_one', {
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
	var mySwiper2 = new Swiper ('.slider_two', {
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
	var mySwiper3 = new Swiper ('.slider_three', {
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
});