function Burger__menu(selector){
	let menu = $(selector);
	let button = menu.find(".menu-icon");
	let list = menu.find(".nav__list");

	button.on('click', (e) => {
		e.preventDefault();
		toggleMenu();
	});



	function toggleMenu() {
		menu.toggleClass('active');
	}
}

Burger__menu('.menu-icon');