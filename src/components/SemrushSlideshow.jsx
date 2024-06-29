import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Import images directly
import semrush1 from '../assets/semrush/semrush1.png';
import semrush2 from '../assets/semrush/semrush2.png';
import semrush3 from '../assets/semrush/semrush3.png';
import semrush4 from '../assets/semrush/semrush4.png';
import semrush5 from '../assets/semrush/semrush5.png';
import semrush6 from '../assets/semrush/semrush6.png';

const Semrush = () => {
    // Use the imported images in the array
    const images = [semrush1, semrush2, semrush3, semrush4, semrush5, semrush6];

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

export default Semrush;