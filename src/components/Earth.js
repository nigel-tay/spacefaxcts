import React, {useEffect, useState} from 'react';
import {Card, CardColumns, CardGroup, Col, Image, Row} from "react-bootstrap";
import Footer from "./Footer";
import lunarTransit from "../images/lunar-transit.png"

function Earth(props) {

    return (
        <div className="earth-container">
            <div className="section-1">
                <h1 className="earth-title">Earth</h1>
                <p className="earth-description">Our blue marble</p>
                <div className="scroll">scroll placeholder</div>
            </div>

            <div className="section-2">
                <div className="split">
                    <div className="earth-image-container row">
                        <Image className="earth-image" src={lunarTransit} alt="moon making transit between earth and dscovr" />
                        <p className="row earth-image-description">July 5th 2016, moon passing between Earth and DSCOVR showing the far side of the moon,
                            which is never seen from the Earth</p>
                    </div>
                    <div className="earth-content">
                        <h3 className="earth-content-title">EPIC</h3>
                        <p>Uniquely positioned at the Earth-Sun Lagrange point, DSCVR's Earth Polychromatic Imaging Camera
                            (EPIC) provides full disc imagery of the Earth and captures unique perspectives
                            of certain astronomical events such as lunar transits using a 2048x2048 pixel CCD
                            (Charge Coupled Device) detlunar tector coupled to a 30-cm aperture Cassegrain telescope.</p>
                        <p>Check out 9th March 2016 in EPIC to see what happens during a solar eclipse!</p>
                        <a href="https://epic.gsfc.nasa.gov/" target="_blank" rel="noreferrer">Visit EPIC</a>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Earth;