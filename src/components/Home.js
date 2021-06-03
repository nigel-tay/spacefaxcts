import React from 'react';
import {Card, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import about from "../images/about.jpg";
import mars from "../images/mars.jpg";
import earth from "../images/earth.JPEG";
import spotd from "../images/spotd.JPEG";
import s1 from "../images/home-section2.jpeg";

function Home() {
    return (
        <div className="home-container" style={{backgroundImage: `url(${s1})`}}>
            <div>HEY</div>
            <div className="section-1">
                <h1 className="home-title">spacefaXcts</h1>
                <div className="box">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className="section-2 mx-4">
                <Row xs={1} md={2} className="card-rows">
                    <Link to="/about">
                        <Card className="home-card">
                            <Card.Img src={about} alt="About image" className="home-card-image" />
                            <Card.ImgOverlay className="home-card-text-container">
                                <Card.Title className="home-card-text">
                                    ABOUT
                                </Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </Link>

                    <Link to="/mars">
                        <Card className="home-card">
                            <Card.Img src={mars} alt="Mars image" className="home-card-image" />
                            <Card.ImgOverlay className="home-card-text-container">
                                <Card.Title className="home-card-text">
                                    MARS
                                </Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </Link>

                    <Link to="/earth">
                        <Card className="home-card">
                            <Card.Img src={earth} alt="Earth image" className="home-card-image"/>
                            <Card.ImgOverlay className="home-card-text-container">
                                <Card.Title className="home-card-text">
                                    EARTH
                                </Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </Link>

                    <Link to="/spotd">
                        <Card className="home-card">
                            <Card.Img src={spotd} alt="Space photo of the day image" className="home-card-image" />
                            <Card.ImgOverlay className="home-card-text-container">
                                <Card.Title className="home-card-text">
                                    #SPOTD
                                </Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </Link>
                </Row>
            </div>
        </div>
    );
}

export default Home;