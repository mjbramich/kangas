// Get the file input and the parent container
const fileInput = document.getElementById('file-input');
const parentContainer = document.getElementById('file-input-container');

// Handle key press events on the file attachment input
parentContainer.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		fileInput.click();
	}
});

const privacyToggle = document.querySelector('#privacy-toggle-btn');
const privacySlider = document.querySelector('#privacy-slider');

console.log(privacyToggle);

let privacyEnabled = false;

privacyToggle.onclick = () => {
	privacyEnabled = !privacyEnabled;
	console.log(privacyToggle);
	if (privacyEnabled) {
		privacyToggle.classList.add('bg-blue');
		privacyToggle.classList.remove('bg-dark-gray');
		privacySlider.classList.add('translate-x-3.5');
		privacySlider.classList.remove('translate-x-0');
	} else {
		privacyToggle.classList.remove('bg-blue');
		privacyToggle.classList.add('bg-dark-gray');
		privacySlider.classList.remove('translate-x-3.5');
		privacySlider.classList.add('translate-x-0');
	}
};

// Update year in the footer
const yearText = document.getElementById('get-year');
const currentYear = new Date().getFullYear();
yearText.innerText = `${currentYear}`;

// Hamburger menu
const createMobileMenu = () => {
	let isOpen = false;
	const mobileMenu = document.getElementById('mobile-menu');
	const mobileMenuList = document.getElementById('mobile-menu-list');
	const body = document.body;

	function toggleMobileMenu() {
		isOpen = !isOpen;
		if (isOpen) {
			openMobileMenu();
		} else {
			closeMobileMenu();
		}
	}

	function openMobileMenu() {
		mobileMenu.classList.add('w-full');
		mobileMenuList.classList.add('opacity-100');
		body.classList.add('overflow-hidden');

		// Add event listeners for focus trapping when the mobile menu is opened
		mobileMenuList.addEventListener('focus', () => {
			const mobileMenuLinks = Array.from(
				mobileMenu.querySelectorAll('#mobile-menu-list a')
			);
			const firstMenuLink = mobileMenuLinks[0];
			const lastMenuLink = mobileMenuLinks[mobileMenuLinks.length - 1];
		});
		mobileMenuList.addEventListener('keydown', handleFocusTrap);
	}

	function closeMobileMenu() {
		mobileMenu.classList.remove('w-full');
		body.classList.remove('overflow-hidden');
		mobileMenuList.classList.remove('opacity-100');

		// Remove event listeners when the mobile menu is closed
		mobileMenuList.removeEventListener('focus', () => {
			firstMenuLink = mobileMenuList.querySelector('a:first-child');
			lastMenuLink = mobileMenuList.querySelector('a:last-child');
		});
		mobileMenuList.removeEventListener('keydown', handleFocusTrap);
	}

	const handleFocusTrap = (event) => {
		if (event.key === 'Tab') {
			if (event.shiftKey) {
				// Shift + Tab: Go to the previous link in the mobile menu
				if (document.activeElement === firstMenuLink) {
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
	};

	return {
		toggleMobileMenu,
	};
};

const mobileMenuInstance = createMobileMenu();
const navBtn = document.getElementById('navBtn');
navBtn.addEventListener('click', () => mobileMenuInstance.toggleMobileMenu());
