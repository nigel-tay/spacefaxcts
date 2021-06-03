import React from 'react';
import {Image} from "react-bootstrap";
import {Link} from "react-router-dom";
import curiosityPhoto from "../images/curiosity.jpeg";
import curiosityBackground from "../images/mars-background.jpg";

function Curiosity() {
    return (
        <div className="curiosity-container">
            <div className="section-1">
                <h1 className="curiosity-title">Curiosity</h1>
                <div className="model-container">
                    <iframe src="https://mars.nasa.gov/gltf_embed/24584" width="100%" height="450px" frameBorder="0" title="curiosity rover"/>
                </div>
                <h3 className="curiosity-description">The biggest bestest boy</h3>
                <p className="curiosity-description">
                    "Part of NASA's Mars Science Laboratory mission,
                    Curiosity is the largest and most capable rover ever sent to Mars.
                    It launched November 26, 2011 and landed on Mars at 10:32 p.m.
                    PDT on Aug. 5, 2012 (1:32 a.m. EDT on Aug. 6, 2012)". - taken from https://mars.nasa.gov/msl/mission/overview/
                </p>
                <div className="box">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className="section-2" style={{backgroundImage: `url(${curiosityBackground})`}}>
                <div className="split">
                    <div className="curiosity-image-container">
                        <Image className="curiosity-image" src={curiosityPhoto} alt="curiosity standing proudly on the surface of mars" />
                    </div>
                    <div className="curiosity-content">
                        <h3 className="curiosity-content-title">Mission overview</h3>
                        <p>"Curiosity set out to answer the question:
                            Did Mars ever have the right environmental conditions to support small life forms called microbes?
                            Early in its mission, Curiosity's scientific tools found chemical and mineral evidence
                            of past habitable environments on Mars. It continues to explore the rock record from a time
                            when Mars could have been home to microbial life". - taken from https://mars.nasa.gov/msl/mission/overview/
                        </p>
                    </div>
                </div>

                <div className="bottom-link-container">
                    <h5>
                        <Link to="/mars/spirit" className="bottom-links"><p>{`< MER Spirit`}</p></Link>
                    </h5>
                    <h3>
                        <Link to="/mars/curiosity-mission" className="bottom-links"><p>Mission Photos</p></Link>
                    </h3>
                    <h5>
                        <Link to="/mars/opportunity" className="bottom-links"><p>{`MER Opportunity >`}</p></Link>
                    </h5>
                </div>
            </div>
        </div>
    );
}

export default Curiosity;


