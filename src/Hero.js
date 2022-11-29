import React from 'react';
import img_grid from './photo-grid.png';


export class Hero extends React.Component {
    render() {
        return (
            <section className="Hero">
                <img className="Hero-img" src={img_grid} alt="img_grid"/>
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts — all without leaving home.</p>
            </section>
        )
    }
}