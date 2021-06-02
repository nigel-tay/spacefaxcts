import React from 'react';
import {Card, CardGroup, Nav, NavLink, Row} from "react-bootstrap";
import Footer from "./Footer";
import CuriosityImg from "../images/curiosity.jpg"
import OpportunityImg from "../images/opportunity.jpg"
import SpiritImg from "../images/spirit.jpg"
import {Link} from "react-router-dom";

function Mars() {
    return (
        <div className="mars-container">
            <div className="section-1">
                <h1 className="mars-title">Mars</h1>
                <p className="mars-description">The red planet</p>
                <div className="scroll">scroll placeholder</div>
            </div>

            <div className="section-2">
                <CardGroup className="mx-4">
                    <Card className="mars-card mx-4">
                        <Card.Img className="rover-image" variant="top" src={SpiritImg} />
                        <Card.Body>
                            <Card.Title className="d-flex justify-content-center">
                                <Link to="/mars/spirit">Spirit</Link>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="mars-card mx-4">
                        <Card.Img variant="top" src={OpportunityImg} />
                        <Card.Body>
                            <Card.Title className="d-flex justify-content-center">
                                <Link to="/mars/opportunity">Opportunity</Link>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="mars-card mx-4">
                        <Card.Img variant="top" src={CuriosityImg} />
                        <Card.Body>
                            <Card.Title className="d-flex justify-content-center">
                                <Link to="/mars/curiosity">Curiosity</Link>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </CardGroup>
                <Footer />
            </div>
        </div>
    );
}

export default Mars;