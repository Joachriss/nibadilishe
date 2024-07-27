import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import sawa from '../assets/gallery/WhatsAppImage2024-06-15at17.46.23.jpeg';
import picha02 from '../assets/gallery/WhatsAppImage2024-06-15at17.46.44.jpeg';
import picha03 from '../assets/gallery/WhatsAppImage2024-06-15at17.46.43.jpeg';
import beach from '../assets/gallery/WhatsAppImage2024-06-15at17.46.29.jpeg';


export const PictureGallery = () => {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className='App'>
            <LightGallery
                elementClassNames="grid grid-cols-2 md:grid-cols-3 gap-2 items-center"
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}

            >
                <a href={sawa} className='w-fit'>
                    <img alt="img1" src={sawa} />
                </a>
                <a href={picha02} className='w-fit'>
                    <img alt="img2" src={picha02} />
                </a>
                <a href={picha03} className='w-fit'>
                    <img alt="img2" src={picha03} />
                </a>
                <a href={beach} className='w-fit'>
                    <img alt="img2" src={beach} />
                </a>
            </LightGallery>
        </div>
    )
}
