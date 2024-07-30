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

import  school from '../assets/gallery/school.jpg';
import  autism from '../assets/gallery/IMG-20240516-WA0118.jpg';
import  hedhi from '../assets/gallery/IMG-20240516-WA0105.jpg';
import  sanaa from '../assets/gallery/IMG-20240516-WA0052.jpg';
import  tabasam from '../assets/gallery/IMG-20240514-WA0014.jpg';
import  wazee from '../assets/gallery/IMG-20240516-WA0056.jpg';
import  miti from '../assets/gallery/IMG-20240516-WA0073.jpg';

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

                <a href={school} className='w-fit'>
                    <img alt="img1" src={school} />
                </a>
                <a href={autism} className='w-fit'>
                    <img alt="img2" src={autism} />
                </a>
                <a href={hedhi} className='w-fit'>
                    <img alt="img2" src={hedhi} />
                </a>
                <a href={sanaa} className='w-fit'>
                    <img alt="img2" src={sanaa} />
                </a>
                <a href={tabasam} className='w-fit'>
                    <img alt="img2" src={tabasam} />
                </a>
                <a href={wazee} className='w-fit'>
                    <img alt="img2" src={wazee} />
                </a>
                <a href={miti} className='w-fit'>
                    <img alt="img2" src={miti} />
                </a>
            </LightGallery>
        </div>
    )
}
