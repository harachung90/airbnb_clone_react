import React from 'react';
import star from './star.png'

export default function Card(props) {
    return (
        <section className="container">
            <div className="card">
                <div className="img_status">
                    <p className="status">SOLD OUT</p>
                    <img src={require(`./${props.coverImg}`)} alt={props.description}/>
                </div>
                <div className="card-info">
                    <img src={star} alt="star rating" className="star"/>
                    <span>{props.stats.rating}</span>
                    <span className="grey">({props.stats.reviewCount}) ﹒</span>
                    <span className="grey">{props.location}</span>
                </div>
                <p>{props.title}</p>
                <p><span className="bold">From ${props.price} </span>/ person </p>
            </div>
        </section>
    )
}
