import './styles.css';
import { formFunctions } from '../../modules/form';

const { privacySlider, fileAttachmentClick, privacyCheck } = formFunctions;

document.addEventListener('DOMContentLoaded', () => {
	// form functions
	privacySlider();
	fileAttachmentClick();
	privacyCheck();
});
