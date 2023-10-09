import './styles.css';
import faqToggle from './faqToggle';
import { formFunctions } from './form';

const { privacySlider, fileAttachmentClick, privacyCheck } = formFunctions;

document.addEventListener('DOMContentLoaded', () => {
	faqToggle();
	// form functions
	privacySlider();
	fileAttachmentClick();
	privacyCheck();
});
