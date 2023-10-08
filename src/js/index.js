import { formFunctions } from './modules/form.js';

const { privacySlider, fileAttachmentClick, privacyCheck } = formFunctions;

document.addEventListener('DOMContentLoaded', () => {
	// form functions
	privacySlider();
	fileAttachmentClick();
	privacyCheck();
});
