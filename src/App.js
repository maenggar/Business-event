import React from 'react';
import './resources/styles.css';
import Header from "./components/header_footer/Header";
import Featured from "./components/Featured";
import VenueInfo from "./components/Venue";
import Highlight from "./components/Highlight";
import Pricing from "./components/Pricing";
import Location from "./components/Location";
import Footer from "./components/header_footer/Footer";
import {Element} from 'react-scroll';

function App() {
    return (
        <div className="App" style={{height: "1500px"}}>
            <Header/>
            <Featured/>
            <VenueInfo/>
            <Element name="highlights">
                <Highlight/>
            </Element>
            <Element name="pricing">
                <Pricing/>
            </Element>
            <Element name="location">
            <Location/>
            </Element>
            <Footer/>
        </div>
    );
}

export default App;
