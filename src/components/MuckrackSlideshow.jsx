import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Import images directly
import muckrack1 from '../assets/muckrack/muckrack1.png';
import muckrack2 from '../assets/muckrack/muckrack2.png';
import muckrack3 from '../assets/muckrack/muckrack3.png';
import muckrack4 from '../assets/muckrack/muckrack4.png';
import muckrack5 from '../assets/muckrack/muckrack5.png';

const Muckrack = () => {
    // Use the imported images in the array
    const images = [muckrack1, muckrack2, muckrack3, muckrack4, muckrack5];

    return (
        <Carousel>
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt={`Slide ${index + 1}`} />
                </div>
            ))}
        </Carousel>
    );
};

export default Muckrack;