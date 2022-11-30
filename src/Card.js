import React from 'react';
import katie from './katie-zaferes.png';
import star from './star.png'

export class Card extends React.Component {
    render() {
        return(
            <section className="container">
                <div className="card">
                    <div className="img_status">
                        <p className="status">SOLD OUT</p>
                        <img src={katie} alt="Katie Zaferes" />
                    </div>
                    <div className="card-info">
                        <img src={star} alt="star rating" className="star" />
                        <span>5.0</span>
                        <span className="grey">(6) ﹒</span>
                        <span className="grey">USA</span>
                    </div>
                    <p>Life lessons with Katie Zaferes</p>
                    <p><span className="bold">From $136 </span>/ person </p>
                </div>
            </section>
        )
    }
}