import React from 'react';
import {Card, CardGroup, Col, Row} from "react-bootstrap";
import Footer from "./Footer";

function Home(props) {
    return (
        <div className="home-container">
            <div className="section-1">
                <h1 className="home-title">spacefaXcts</h1>
                <div className="scroll">scroll placeholder</div>
            </div>

            <div className="section-2 mx-4">
                <Row xs={1} md={2}>
                    <Card className="col home-card">
                        <Card.Img src="http://placehold.it/300x300" alt="About image" className="home-card-image" />
                        <Card.ImgOverlay className="home-card-text-container">
                            <Card.Title className="home-card-text">About</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="col home-card">
                        <Card.Img src="http://placehold.it/300x300" alt="Mars image" className="home-card-image" />
                        <Card.ImgOverlay className="home-card-text-container">
                            <Card.Title className="home-card-text">Mars</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="col home-card my-4">
                        <Card.Img src="http://placehold.it/300x300" alt="Earth image" className="home-card-image"/>
                        <Card.ImgOverlay className="home-card-text-container">
                            <Card.Title className="home-card-text">Earth</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="col home-card my-4">
                        <Card.Img src="http://placehold.it/300x300" alt="Space photo of the day image" className="home-card-image" />
                        <Card.ImgOverlay className="home-card-text-container">
                            <Card.Title className="home-card-text">SPOTD</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </Row>

                <Footer />
            </div>
        </div>
    );
}

export default Home;