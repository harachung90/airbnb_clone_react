import React from 'react';
import star from './star.png'

export default function Card(props) {
    let badgeText;
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <section className="container">
            <div className="card">
                <div className="img_status">
                    {badgeText && <p className="status">{badgeText}</p>}
                    <img src={require(`./${props.item.coverImg}`)} alt={props.item.description}/>
                </div>
                <div className="card-info">
                    <img src={star} alt="star rating" className="star"/>
                    <span>{props.item.stats.rating}</span>
                    <span className="grey">({props.item.stats.reviewCount}) ﹒</span>
                    <span className="grey">{props.item.location}</span>
                </div>
                <p>{props.title}</p>
                <p><span className="bold">From ${props.item.price} </span>/ person </p>
            </div>
        </section>
    )
}
