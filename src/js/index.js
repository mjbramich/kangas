import { formFunctions } from './modules/form.js';

const { privacySlider, fileAttachmentClick, privacyCheck, filterCheckbox } =
	formFunctions;

document.addEventListener('DOMContentLoaded', () => {
	// form functions
	privacySlider();
	fileAttachmentClick();
	privacyCheck();
	filterCheckbox();
});
