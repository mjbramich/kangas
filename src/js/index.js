import { formFunctions } from './modules/form.js';

const { privacySlider, privacyCheck } = formFunctions;

document.addEventListener('DOMContentLoaded', () => {
	// form functions
	privacySlider();
	privacyCheck();
});
