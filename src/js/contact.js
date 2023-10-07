import './styles.css';
import faqToggle from './modules/faqToggle';
import { formFunctions } from './modules/form';

const { privacySlider, fileAttachmentClick, privacyCheck } = formFunctions;

document.addEventListener('DOMContentLoaded', () => {
	faqToggle();
	// form functions
	privacySlider();
	fileAttachmentClick();
	privacyCheck();
});
