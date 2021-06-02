import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {Image} from "react-bootstrap";

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
            axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&api_key=Dvef1dOc51iUgHDH93ncfcFAbriP6uDccUuTIo4x`)
                .then(res =>{
                    setMissionPhotos(res.data.photos)
                    console.log(missionPhotos)
                })
        }
        console.log(missionPhotos)
    },[missionPhotos, rover, sol])

    return (
        <div>
            <div className="mission-container">
                <div className="section-1">
                    <h1 className="mission-title">Mission Photos from {rover}</h1>
                    <p className="mission-description">Our Universe</p>
                    <div className="scroll">scroll placeholder</div>
                </div>
                <div className="section-2">

                    {missionPhotos.map((el) =>(
                        <div className="split">
                            <div className="mission-image-container">
                                <Image className="mission-image" src={el.img_src} alt="daily space image" />
                                <p>sol: {el.sol}</p>
                                <p>Date: {el.earth_date}</p>
                            </div>
                            <div className="mission-content">
                                <h3 className="mission-content-title">Taken on {rover}'s {el.camera.full_name}</h3>
                            </div>
                        </div>
                        ))}
                    <p>1 sol = 1 solar day on Mars (24h 39mins 35s)</p>
                </div>
            </div>

        </div>
    );
}

export default Mission;

// Dvef1dOc51iUgHDH93ncfcFAbriP6uDccUuTIo4x
// https://api.nasa.gov/mars-photos/api/v1/rovers/{rover}/photos?sol={sol}&camera=navcam&api_key=Dvef1dOc51iUgHDH93ncfcFAbriP6uDccUuTIo4x