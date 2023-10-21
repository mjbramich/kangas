const fileAttachmentClick = () => {
	const fileInput = document.getElementById('file-input');
	const parentContainer = document.getElementById('file-input-container');

	// Handle key press events on the file attachment input
	parentContainer.addEventListener('keydown', (event) => {
		if (event.key === 'Enter') {
			fileInput.click();
		}
	});
};

const privacySlider = () => {
	const privacyToggle = document.querySelector('#privacy-toggle-btn');
	const privacySlider = document.querySelector('#privacy-slider');

	console.log(privacyToggle);

	let privacyEnabled = false;

	privacyToggle.onclick = () => {
		privacyEnabled = !privacyEnabled;
		console.log(privacyToggle);
		if (privacyEnabled) {
			privacyToggle.classList.add('bg-kangablue');
			privacyToggle.classList.remove('bg-kangagray');
			privacySlider.classList.add('translate-x-3.5');
			privacySlider.classList.remove('translate-x-0');
			privacyToggle.setAttribute('aria-checked', 'true');
		} else {
			privacyToggle.classList.remove('bg-kangablue');
			privacyToggle.classList.add('bg-kangagray');
			privacySlider.classList.remove('translate-x-3.5');
			privacySlider.classList.add('translate-x-0');
			privacyToggle.setAttribute('aria-checked', 'false');
		}
	};
};

const privacyCheck = () => {
	const submitButton = document.getElementById('form-submit');
	const privacyToggle = document.getElementById('privacy-toggle-btn');

	// check if the privacy toggle button is checked
	function isPrivacyPolicyAccepted() {
		return privacyToggle.getAttribute('aria-checked') === 'true';
	}

	// E
	submitButton.onclick = (event) => {
		if (!isPrivacyPolicyAccepted()) {
			event.preventDefault(); // Prevent form submission if privacy policy is not accepted
			alert('Please agree to the privacy policy before submitting.');
		}
	};
};

const filterCheckbox = () => {
	document
		.getElementById('quote')
		.addEventListener('submit', function (event) {
			// Get all checkbox inputs
			const checkboxes = document.querySelectorAll(
				'input[type="checkbox"]'
			);

			checkboxes.forEach((checkbox) => {
				if (!checkbox.checked) {
					// Remove the unchecked checkboxes from the form data
					const name = checkbox.getAttribute('name');
					if (name) {
						this[name].remove();
					}
				}
			});
			// Form will  submit without the unchecked checkboxes
		});
};

export const formFunctions = {
	privacySlider,
	privacyCheck,
	fileAttachmentClick,
	filterCheckbox,
};
