import faqToggle from './modules/faqToggle';
import { formFunctions } from './modules/form';

const { privacySlider, privacyCheck } = formFunctions;

document.addEventListener('DOMContentLoaded', () => {
	faqToggle();
	// form functions
	privacySlider();
	privacyCheck();
});
