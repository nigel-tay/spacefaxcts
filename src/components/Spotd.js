import React, {useEffect, useState} from 'react';
import {Image} from "react-bootstrap";
import axios from "axios";
// import spotdBackground from "../videos/spotd-section1.mov";
import s2 from "../images/spotd.JPEG";

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
                {/*<video src={spotdBackground} autoPlay loop muted />*/}
                <h1 className="spotd-title">#SPOTD</h1>
                <p className="spotd-description">Our Universe</p>
                <div className="scroll">scroll placeholder</div>
            </div>

            <div className="section-2">
                <div className="split">
                    <div className="spotd-image-container">
                        <Image className="spotd-image" src={apod.url} alt="daily space image" />
                        <p>{apod.date}</p>
                    </div>
                    <div className="spotd-content">
                        <h3 className="spotd-content-title">{apod.title}</h3>
                        <p>{apod.explanation}</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Spotd;

//Dvef1dOc51iUgHDH93ncfcFAbriP6uDccUuTIo4x