import { formFunctions } from './modules/form.js';

const { privacySlider, privacyCheck } = formFunctions;

// Landing Page Specific JS 
document.addEventListener('DOMContentLoaded', () => {
	// form functions
	privacySlider();
	privacyCheck();
});
