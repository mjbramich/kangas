import 'photoswipe/style.css';
import PhotoSwipeLightbox from 'photoswipe/lightbox';

document.addEventListener('DOMContentLoaded', function () {
	const lightbox = new PhotoSwipeLightbox({
		gallery: '#my-gallery',
		children: 'a',
		pswpModule: () => import('photoswipe'),
	});
	lightbox.init();

	lightbox.on('beforeOpen', (e) => {
		console.log(e);
		console.log('beforeOpen');
		// photoswipe starts to open
	});
});
