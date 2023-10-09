const createMobileMenu = () => {
	let isOpen = false;
	const mobileMenu = document.getElementById('mobile-menu');
	const mobileMenuList = document.getElementById('mobile-menu-list');
	const openBtnImage = document.getElementById('navOpenBtn');
	const closeBtnImage = document.getElementById('navCloseBtn');
	const body = document.body;
	let firstMenuLink, lastMenuLink;

	function toggleMobileMenu() {
		isOpen = !isOpen;
		if (isOpen) {
			openMobileMenu();
		} else {
			closeMobileMenu();
		}
	}

	const mobileMenuLinks = Array.from(mobileMenu.querySelectorAll('a'));

	function openMobileMenu() {
		mobileMenu.classList.add('w-full');
		mobileMenuList.classList.add('opacity-100');
		body.classList.add('fixed');
		body.classList.add('overflow-hidden');
		openBtnImage.classList.add('hidden');
		closeBtnImage.classList.remove('hidden');

		console.log(mobileMenuLinks);

		firstMenuLink = navBtn;
		lastMenuLink = mobileMenuLinks[mobileMenuLinks.length - 1];

		mobileMenuLinks.forEach((link) => link.setAttribute('tabindex', '0'));

		// Add event listener for 'keydown' to manage focus trapping
		mobileMenuList.addEventListener('keydown', handleFocusTrap);
		navBtn.addEventListener('keydown', handleFocusTrap);
	}

	function closeMobileMenu() {
		mobileMenu.classList.remove('w-full');
		mobileMenuList.classList.remove('opacity-100');
		body.classList.remove('fixed');
		body.classList.remove('overflow-hidden');
		closeBtnImage.classList.add('hidden');
		openBtnImage.classList.remove('hidden');

		// need to remove focus if menu is closed
		mobileMenuLinks.forEach((link) => link.setAttribute('tabindex', '-1'));

		// Remove event listener when the mobile menu is closed
		mobileMenuList.removeEventListener('keydown', handleFocusTrap);
		navBtn.removeEventListener('keydown', handleFocusTrap);

		navBtn.focus();
	}

	function handleFocusTrap(event) {
		console.log('acitve:', document.activeElement);
		if (event.key === 'Tab') {
			if (event.shiftKey) {
				// Shift + Tab: Go to the previous link in the mobile menu
				if (document.activeElement === navBtn) {
					lastMenuLink.focus();
					event.preventDefault();
				}
			} else {
				// Tab: Go to the next link in the mobile menu
				if (document.activeElement === lastMenuLink) {
					firstMenuLink.focus();
					event.preventDefault();
				}
			}
		}
	}

	return {
		toggleMobileMenu,
	};
};

function initializeMobileMenu() {
	const mobileMenuInstance = createMobileMenu();
	const navBtn = document.getElementById('navBtn');
	navBtn.addEventListener('click', () =>
		mobileMenuInstance.toggleMobileMenu()
	);
}

export default initializeMobileMenu;
