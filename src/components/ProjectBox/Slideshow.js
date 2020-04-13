import React from 'react';
import { Slide } from 'react-slideshow-image';


const slideProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true
}

function Slideshow(images) {
    return(
        <div className="slide">
            <Slide {...slideProperties}>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${images.images[0]})`}}>
                        <span>Slide 1</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${images.images[1]})`}}>
                        <span>Slide 2</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${images.images[2]})`}}>
                        <span>Slide 2</span>
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Slideshow;