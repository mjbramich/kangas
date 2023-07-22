// Get the file input and the parent container
const fileInput = document.getElementById('file-input');
const parentContainer = document.getElementById('file-input-container');

// Handle key press events on the file attachment input
parentContainer.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		fileInput.click();
	}
});

const privacyToggle = document.querySelector('#privacy-toggle-btn');
const privacySlider = document.querySelector('#privacy-slider');

console.log(privacyToggle);

let privacyEnabled = false;

privacyToggle.onclick = () => {
	privacyEnabled = !privacyEnabled;
	console.log(privacyToggle);
	if (privacyEnabled) {
		privacyToggle.classList.add('bg-blue');
		privacyToggle.classList.remove('bg-dark-gray');
		privacySlider.classList.add('translate-x-3.5');
		privacySlider.classList.remove('translate-x-0');
	} else {
		privacyToggle.classList.remove('bg-blue');
		privacyToggle.classList.add('bg-dark-gray');
		privacySlider.classList.remove('translate-x-3.5');
		privacySlider.classList.add('translate-x-0');
	}
};

// Update year in the footer
const yearText = document.getElementById('get-year');
const currentYear = new Date().getFullYear();
yearText.innerText = `${currentYear}`;
