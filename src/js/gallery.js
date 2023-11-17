import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

const lightbox = new PhotoSwipeLightbox({
	gallery: '#my-gallery',
	children: 'a',
	pswpModule: () => import('photoswipe'),
});
lightbox.init();
