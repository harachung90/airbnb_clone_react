import React from 'react';
import star from './star.png'

export default function Card(props) {
    return (
        <section className="container">
            <div className="card">
                <div className="img_status">
                    <p className="status">SOLD OUT</p>
                    <img src={props.img} alt="Katie Zaferes"/>
                </div>
                <div className="card-info">
                    <img src={star} alt="star rating" className="star"/>
                    <span>{props.rating}</span>
                    <span className="grey">({props.raters}) ﹒</span>
                    <span className="grey">{props.country}</span>
                </div>
                <p>{props.title}</p>
                <p><span className="bold">From ${props.cost} </span>/ person </p>
            </div>
        </section>
    )
}
