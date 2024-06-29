import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Import images directly
import meltwater1 from '../assets/meltwater/meltwater1.png';
import meltwater2 from '../assets/meltwater/meltwater2.png';
import meltwater3 from '../assets/meltwater/meltwater3.png';
import meltwater4 from '../assets/meltwater/meltwater4.png';
import meltwater5 from '../assets/meltwater/meltwater5.png';
import meltwater6 from '../assets/meltwater/meltwater6.png';
import meltwater7 from '../assets/meltwater/meltwater7.png';

const Meltwater = () => {
    // Use the imported images in the array
    const images = [meltwater1, meltwater2, meltwater3, meltwater4, meltwater5, meltwater6, meltwater7];

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

export default Meltwater;