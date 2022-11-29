import React from 'react';
import img1 from './img.png';
import img2 from './img_1.png';
import img3 from './img_2.png';
import img4 from './img_3.png';
import img5 from './img_4.png';
import img6 from './img_5.png';
import img7 from './img_6.png';
import img8 from './img_7.png';
import img9 from './img_8.png';

export class Hero extends React.Component {
    render() {
        return(
            <div className="Hero">
                <div className="Hero-imgs">
                    <img src={img1} alt="img_1" />
                    <img src={img2} alt="img_2" />
                    <img src={img3} alt="img_3" />
                    <img src={img4} alt="img_4" />
                    <img src={img5} alt="img_5" />
                    <img src={img6} alt="img_6" />
                    <img src={img7} alt="img_7" />
                    <img src={img8} alt="img_8" />
                    <img src={img9} alt="img_9" />
                </div>
                <div className="Hero-info" >
                    <h1>Online Experiences</h1>
                    <p>Join unique interactive activities led by one-of-a-kind hosts — all without leaving home.</p>
                </div>
            </div>
        )
    }
}