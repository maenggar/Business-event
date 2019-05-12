import React from 'react';
import Slider from 'react-slick';

import slide_one from '../../resources/images/slide-one.jpg';
import slide_two from '../../resources/images/slide-two.jpg';
import slide_three from '../../resources/images/slide-three.jpg';

const Carrousel = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000
        // slidesToShow: 1,
        // slidesToScroll: 1
    }

    return (
        <div className="carrousel_wrapper"
             style={{
                 height: `${window.innerHeight}px`,
                  overflow: 'hidden'
             }}
        >
            <Slider {...settings}>
                <div>
                    <div className="carrousel_image"
                         style={{
                             background: `url(${slide_one})`,
                             height: `${window.innerHeight}px`
                         }}
                    >
                    </div>
                </div>
                <div>
                    <div className="carrousel_image"
                         style={{
                             background: `url(${slide_two})`,
                             height: `${window.innerHeight}px`
                         }}
                    >
                    </div>
                </div>
                <div>
                    <div className="carrousel_image"
                         style={{
                             background: `url(${slide_three})`,
                             height: `${window.innerHeight}px`
                         }}
                    >

                    </div>
                </div>
            </Slider>

        </div>
    );
};

export default Carrousel;