const menuButton = document.getElementById('menu-button');
const dropdownMenu = document.getElementById('dropdown-menu');

let isMenuOpen = false;

menuButton.addEventListener('click', () => {
	if (isMenuOpen) {
		closeDropdown();
	} else {
		openDropdown();
	}
});

function openDropdown() {
	dropdownMenu.classList.remove('hidden');
	dropdownMenu.classList.add('scale-100', 'opacity-100');
	isMenuOpen = true;
}

function closeDropdown() {
	dropdownMenu.classList.remove('scale-100', 'opacity-100');
	dropdownMenu.classList.add('hidden', 'scale-95', 'opacity-0');
	isMenuOpen = false;
}

document.body.addEventListener('click', (event) => {
	if (
		!menuButton.contains(event.target) &&
		!dropdownMenu.contains(event.target)
	) {
		closeDropdown();
	}
});
