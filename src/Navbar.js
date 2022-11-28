import React from 'react';
import logo from "./airbnb-logo.png";

export class Navbar extends React.Component {
    render() {
        return (
            <nav className="Navbar">
                <img src={logo} alt="AirBnB logo"/>
            </nav>
        )
    }
}