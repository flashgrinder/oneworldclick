document.addEventListener('DOMContentLoaded', function () {

	let burger = document.querySelector('.headerTop__burger');
	let menu = document.querySelector('.header-navigation');
	// let link = document.querySelectorAll('.headerMenu__navigation > ul > li > a');

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
		formContainer.classList.add('form-bg_active')
	}
	function hideModal() {
		modal.classList.remove('formPopaps_active');
		formContainer.classList.remove('form-bg_active')
	}

	btnServices.addEventListener('click', showModal);
	formBg.addEventListener('click', hideModal)

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
});