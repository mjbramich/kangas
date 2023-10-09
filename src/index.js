import './styles.css';
import { formFunctions } from './form';

const { privacySlider, fileAttachmentClick, privacyCheck } = formFunctions;

document.addEventListener('DOMContentLoaded', () => {
	// form functions
	privacySlider();
	fileAttachmentClick();
	privacyCheck();
});
