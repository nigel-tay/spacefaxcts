import React, {useEffect, useState} from 'react';
import {Image} from "react-bootstrap";
import Footer from "./Footer";
import axios from "axios";

function Spotd(props) {
    const [apod, setApod] = useState([])

    useEffect(() => {
       axios.get("https://api.nasa.gov/planetary/apod?api_key=Dvef1dOc51iUgHDH93ncfcFAbriP6uDccUuTIo4x")
           .then(res => {
               setApod(res.data);
           })
    },[])

    return (
        <div className="spotd-container">
            <div className="section-1">
                <h1 className="spotd-title">#SPOTD</h1>
                <p className="spotd-description">Our Universe</p>
                <div className="scroll">scroll placeholder</div>
            </div>

            <div className="section-2">
                <div className="split">
                    <div className="spotd-content">
                        <h3 className="spotd-content-title">{apod.title}</h3>
                        <p>{apod.explanation}</p>
                    </div>
                    <div className="spotd-image-container">
                        <Image className="spotd-image" src={apod.url} alt="daily space image" />
                        <p>{apod.date}</p>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Spotd;

//Dvef1dOc51iUgHDH93ncfcFAbriP6uDccUuTIo4x