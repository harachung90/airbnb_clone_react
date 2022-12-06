import './App.css';
import ReactDOM from "react-dom/client";
import {Navbar} from "./Navbar";
import {Hero} from "./Hero";
import Card from "./Card";
import Data from "./Data";


function App() {
    const cardElement = Data.map(card => {
        return <Card
                id={card.id}
                title={card.title}
                description={card.description}
                price={card.price}
                coverImg={card.coverImg}
                stats={card.stats}
                location={card.location}
                openSpots={card.openSpots}
            />
    })

    return (
        <div className="App">
            <Navbar/>
            <Hero/>

            <div className="cards">
                {cardElement}
                {/*<Card
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
                />*/}
            </div>

        </div>
    );
}

export default App;
