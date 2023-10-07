const updateFooterYear = () => {
	const yearText = document.getElementById('get-year');
	if (yearText) {
		const currentYear = new Date().getFullYear();
		yearText.innerText = `${currentYear}`;
	} else {
		console.error('ERROR');
	}
};

export default updateFooterYear;
