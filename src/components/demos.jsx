import React from 'react'
import { ProGallery } from 'pro-gallery'
import 'pro-gallery/dist/statics/main.css';

export default function Demos() {

  	// Add your images here...
	const items = [
		{ // Image item:
			itemId: 'project-cb',
			mediaUrl: 'https://images2.imgbox.com/18/b6/nR4qfQvN_o.png',
			metaData: {
				type: 'image',
				height: 100,
				width: 100,
				title: 'Data Aggregator (projectCB)',
				description: 'description',
				focalPoint: [0, 0],
				link: {
					url: 'https://github.com/iFrogHop2Worlds/projectCB',
					target: '_blank'
				},
			}
		},
    { // Image item:
			itemId: 'finance',
			mediaUrl: 'https://images2.imgbox.com/ca/dc/nsvevg4x_o.png',
			metaData: {
				type: 'image',
				height: 100,
				width: 100,
				title: 'Finance (Options Pricing & Banking)',
				description: 'sample-description',
				focalPoint: [0, 0],
				link: {
					url: 'https://github.com/iFrogHop2Worlds/Finance-Project',
					target: '_blank'
				},
			}
		},
    { // Image item:
			itemId: 'maas-dao',
			mediaUrl: 'https://images2.imgbox.com/86/e9/QgojDThE_o.png',
			metaData: {
				type: 'image',
				height: 100,
				width: 100,
				title: 'Maas-dao',
				description: 'sample-description',
				focalPoint: [0, 0],
				link: {
					url: 'https://maasdao.io/',		
				},
			}
		},
    { // Image item:
			itemId: 'CPR',
			mediaUrl: 'https://images2.imgbox.com/45/9f/2eEG0fg5_o.png',
			metaData: {
				type: 'image',
				height: 100,
				width: 100,				
				title: 'CPR',
				description: 'sample-description',
				focalPoint: [0, 0],
				link: {
					url: 'https://github.com/Hackr-Sach/Avalanche-Hackathon-Project',
					target: '_blank'
				},
			}
		},
    { // Image item:
			itemId: 'Mintagram',
			mediaUrl: 'https://images2.imgbox.com/79/f9/nBtZlMSi_o.png',
			metaData: {
				type: 'image',
				height: 100,
				width: 100,
				title: 'Mintagram',
				description: 'sample-description',
				focalPoint: [0, 0],
				link: {
					url: 'https://github.com/Hackr-Sach/Mintagram',
					target: '_blank'
				},
			}
		},
	]

	const options = {
      "layoutParams": {
          "structure": {
              "galleryLayout": -1
          }
      },
      "behaviourParams": {
          "item": {
              "clickAction": "LINK"
          }
      }
	};


	// The size of the gallery container. The images will fit themselves in it
	const container = {
		width: window.innerWidth,
		height: window.innerHeight
	};

	// The eventsListener will notify you anytime something has happened in the gallery.
	const eventsListener = (eventName, eventData) => console.log({eventName, eventData}); 

	// The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
	const scrollingElement = window;

  return (
    <>
    <div>      
       <h2>Project Gallery</h2>
      <p>under construction</p>
    </div>
    <div id='background'>
      <div id='project-gallery'>
        <ProGallery
          items={items}
          options={options}
          container={container}
          eventsListener={eventsListener}
          scrollingElement={scrollingElement}
        />
      </div>
    <style>{`
      #background {
        background-color: #1e282e;
        color: #ffffff;
        height: 850px;
        width: auto;
        padding-top: 20px;

      }
      #project-gallery {
        padding-top: 3%;
        display: flex;
        justify-content: center;  
      }

    `}</style>
  </div>
  </>
  )
}
