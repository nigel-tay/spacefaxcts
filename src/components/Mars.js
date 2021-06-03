import React from 'react';
import {Card, Row} from "react-bootstrap";
import CuriosityImg from "../images/curiosity.jpg"
import OpportunityImg from "../images/opportunity.jpg"
import SpiritImg from "../images/spirit.jpg"
import {Link} from "react-router-dom";
import marsBackground from "../videos/mars-section1.mp4";
import s2 from "../images/mars-background.jpg";

function Mars() {
    return (
        <div className="mars-container">
            <div className="section-1">
                <video src={marsBackground} autoPlay loop muted />
                <h1 className="mars-title">Mars</h1>
                <p className="mars-description">The red planet</p>
                <div className="scroll">scroll placeholder</div>
            </div>

            <div className="section-2">
                <Row xs={1} md={3} className="card-rows">
                    <Link to="/mars/spirit">
                        <Card className="mars-card">
                            <Card.Img src={SpiritImg} alt="About image" className="mars-card-image" />
                            <Card.ImgOverlay className="mars-card-text-container">
                                <Card.Title className="mars-card-text">
                                    SPIRIT
                                </Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </Link>
                    <Link to="/mars/opportunity">
                        <Card className="mars-card">
                            <Card.Img src={OpportunityImg} alt="About image" className="mars-card-image" />
                            <Card.ImgOverlay className="mars-card-text-container">
                                <Card.Title className="mars-card-text">
                                    OPPORTUNITY
                                </Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </Link>
                    <Link to="/mars/curiosity">
                        <Card className="mars-card">
                            <Card.Img src={CuriosityImg} alt="About image" className="mars-card-image" />
                            <Card.ImgOverlay className="mars-card-text-container">
                                <Card.Title className="mars-card-text">
                                    CURIOSITY
                                </Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </Link>
                </Row>
            </div>
        </div>
    );
}

export default Mars;