import './styles.css';
import initializeMobileMenu from './mobileMenu.js';
import updateFooterYear from './footer.js';

// Fire when html has parsed
document.addEventListener('DOMContentLoaded', () => {
	// JS for all pages
	updateFooterYear();
	initializeMobileMenu();
});
