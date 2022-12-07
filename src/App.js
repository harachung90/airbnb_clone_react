import './App.css';
import {Navbar} from "./Navbar";
import {Hero} from "./Hero";
import Card from "./Card";
import Data from "./Data";


function App() {
    const cardElement = Data.map(card => {
        return <Card
            key={card.id}
            item={card}
        />
    })

    return (
        <div className="App">
            <Navbar/>
            <Hero/>
            <div className="cards">
                {cardElement}
            </div>

        </div>
    );
}

export default App;
