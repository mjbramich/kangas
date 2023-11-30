import 'photoswipe/style.css';
import PhotoSwipe from 'photoswipe';
import roofData from './data/roof';
import houseData from './data/house';
import gutterData from './data/gutter';
import solarpanelData from './data/solarpanel';
import drivewayData from './data/driveway';
import bandpData from './data/bandp';

const galleries = {
	'roof-gallery': roofData,
	'house-gallery': houseData,
	'gutter-gallery': gutterData,
	'solarpanel-gallery': solarpanelData,
	'driveway-gallery': drivewayData,
	'bandp-gallery': bandpData,
};

document.addEventListener('DOMContentLoaded', function () {
	function initializeGallery(galleryId, dataSource) {
		document.querySelector(`#${galleryId}`).onclick = () => {
			const options = {
				dataSource: dataSource,
				pswpModule: () => import('photoswipe'),
				// Add other options for all galleries if needed
			};
			const lightbox = new PhotoSwipe(options);
			lightbox.init();
		};
	}

	for (const [galleryId, dataSource] of Object.entries(galleries)) {
		initializeGallery(galleryId, dataSource);
	}
});
