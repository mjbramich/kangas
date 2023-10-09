import './styles.css';
import faqToggle from './faqToggle.js';
import initializeMobileMenu from './mobileMenu.js';
import { formFunctions } from './form.js';
import updateFooterYear from './footer.js';

const { privacySlider, fileAttachmentClick, privacyCheck } = formFunctions;

// Fire when html has parsed
document.addEventListener('DOMContentLoaded', () => {
	updateFooterYear();
	initializeMobileMenu();
	console.log('HI', window.location.pathname);
	// JS for specific pages
	if (window.location.pathname === '/') {
		console.log('Inside root', window.location.pathname);
		// form functions
		privacySlider();
		fileAttachmentClick();
		privacyCheck();
	}

	if (window.location.pathname === '/contact') {
		console.log('Entering /contact.html condition');
		faqToggle();
		// form functions
		privacySlider();
		fileAttachmentClick();
		privacyCheck();
	}
});
