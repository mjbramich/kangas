import 'photoswipe/style.css';
import PhotoSwipe from 'photoswipe';
import roofData from './data/roof-gallery';

const options = {
	dataSource: [
		{
			src: '../images/beforeafters/roof/roof1.jpeg',
			width: 1439,
			height: 1800,
			alt: 'Before and after roof clean',
		},
		{
			src: '../images/beforeafters/roof/roof2.jpeg',
			width: 1439,
			height: 1800,
			alt: 'Before and after roof clean',
		},

		{
			src: 'https://dummyimage.com/800x600/555/fff/?text=3',
			width: 800,
			height: 600,
		},
		{
			src: 'https://dummyimage.com/800x600/555/fff/?text=4',
			width: 800,
			height: 600,
		},
		{
			src: 'https://dummyimage.com/800x600/555/fff/?text=5',
			width: 800,
			height: 600,
		},
	],
	pswpModule: () => import('photoswipe'),
};

const galleries = {
	'roof-gallery': roofData,
	'house-gallery': roofData,
	'gutter-gallery': roofData,
	'solarpanel-gallery': roofData,
	'driveway-gallery': roofData,
	'bandp-gallery': roofData,
};

document.addEventListener('DOMContentLoaded', function () {
	function initializeGallery(galleryId, dataSource) {
		document.querySelector(`#${galleryId}`).onclick = () => {
			const options = {
				dataSource: dataSource,
				pswpModule: () => import('photoswipe'),
				// Add other common options for all galleries
			};
			const lightbox = new PhotoSwipe(options);
			lightbox.init();
		};
	}

	for (const [galleryId, dataSource] of Object.entries(galleries)) {
		initializeGallery(galleryId, dataSource);
	}
});
