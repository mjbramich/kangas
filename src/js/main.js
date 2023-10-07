import './styles.css';
import initializeMobileMenu from '../../modules/mobileMenu.js';
import updateFooterYear from '../../modules/footer.js';

// Fire when html has parsed
document.addEventListener('DOMContentLoaded', () => {
	// JS for all pages
	updateFooterYear();
	initializeMobileMenu();
});
