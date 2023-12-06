const faqToggle = () => {
	const faqList = document.getElementById('faqList');
	const questions = Array.from(faqList.querySelectorAll('dt'));

	questions.forEach((question) => {
		question.addEventListener('click', handleClick);
	});


	// need to loop over list
	function handleClick(e) {
		const clickedQuestion = e.currentTarget;

		// get the corresponding answet to the clicked question
		const answerId = clickedQuestion
			.querySelector('[aria-controls]')
			.getAttribute('aria-controls');

		const answer = document.getElementById(answerId);

		const openIcon = clickedQuestion.querySelector('#openIcon');
		const closeIcon = clickedQuestion.querySelector('#closeIcon');

		const isExpanded =
			clickedQuestion
				.querySelector('[aria-expanded]')
				.getAttribute('aria-expanded') === 'true';

		clickedQuestion
			.querySelector('[aria-expanded]')
			.setAttribute('aria-expanded', !isExpanded);

		answer.classList.toggle('hidden');
		openIcon.classList.toggle('hidden');
		closeIcon.classList.toggle('hidden');
	}
};

export default faqToggle;
