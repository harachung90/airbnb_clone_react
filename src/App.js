import './App.css';
import {Navbar} from "./Navbar";
import {Hero} from "./Hero";
import Card from "./Card";

import katie from './katie-zaferes.png';
import wedding from './img_1.png';
import bike from './img_2.png';

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Hero/>
            <div className="cards">
                <Card
                    img={katie}
                    rating="5.0"
                    raters="6"
                    country="USA"
                    title="Life lessons with Katie Zaferes"
                    cost="136"
                />
                <Card
                    img={wedding}
                    rating="5.0"
                    raters="30"
                    country="USA"
                    title="Learn wedding photography"
                    cost="125"
                />
                <Card
                    img={bike}
                    rating="4.8"
                    raters="2"
                    country="USA"
                    title="Group Mountain Biking"
                    cost="50"
                />
            </div>

        </div>
    );
}

export default App;
