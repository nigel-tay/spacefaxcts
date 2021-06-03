import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {Card, CardColumns, Row} from "react-bootstrap";
import missionBackground from "../images/earth-background.jpeg"

function Mission() {

    const [missionPhotos, setMissionPhotos] = useState([]);
    let {id} = useParams();
    let rover = "";
    let sol = "";

    if (id === "spirit-mission"){
        rover = "Spirit";
        sol = Math.floor(Math.random() * 2208)
        }
    else if( id === "opportunity-mission"){
        rover = "Opportunity";
        sol = Math.floor(Math.random() * 5111)
    }
    else if( id === "curiosity-mission"){
        rover = "Curiosity";
        sol = Math.floor(Math.random() * 3134)
    }

    //try to get it to fetch until res.data.photos does not return an empty array
    useEffect(() => {
        if (missionPhotos.length === 0){
            axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&api_key=Dvef1dOc51iUgHDH93ncfcFAbriP6uDccUuTIo4x&page=1`)
                .then(res =>{
                    setMissionPhotos(res.data.photos)
                    console.log(missionPhotos)
                })
        }
        console.log(missionPhotos)
    },[missionPhotos, rover, sol])

    return (
        <div>
            <div className="mission-container" style={{backgroundImage: `url(${missionBackground})`}}>
                <div className="section-1">
                    <h1 className="mission-title">Mission Photos from {rover}</h1>
                    <p className="mission-description">Images captured from NASA's Mars Rovers</p>
                    <div className="scroll">scroll placeholder</div>
                </div>

                <div className="section-2">
                    <Row className="d-flex justify-content-center">
                        <CardColumns className="g-3">
                            {missionPhotos.map((el) =>(

                                <Card bg="dark" text="light">
                                    <Card.Img variant="top"
                                              src={el.img_src}
                                              className="card-image"
                                    />
                                    <Card.Body>
                                        <Card.Text>
                                            {`Taken on ${rover}'s ${el.camera.full_name}`}<br/>
                                            sol: {el.sol}<br/>
                                            Earth date: {el.earth_date}
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            ))}
                        </CardColumns>
                    </Row>
                    <p>1 sol = 1 solar day on Mars (24h 39mins 35s)</p>
                </div>
            </div>

        </div>
    );
}

export default Mission;

// Dvef1dOc51iUgHDH93ncfcFAbriP6uDccUuTIo4x
// https://api.nasa.gov/mars-photos/api/v1/rovers/{rover}/photos?sol={sol}&camera=navcam&api_key=Dvef1dOc51iUgHDH93ncfcFAbriP6uDccUuTIo4x