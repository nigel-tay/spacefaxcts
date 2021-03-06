import React from 'react';
import {Image} from "react-bootstrap";
import {Link} from "react-router-dom";
import sophoto from "../images/spiritopportunity.png";
import spiritBackground from "../images/mars-background.jpg";

function Spirit() {
    return (
        <div className="spirit-container">
            <div className="section-1">
                <h1 className="spirit-title">Spirit and Opportunity</h1>
                <div className="model-container">
                    <iframe src='https://solarsystem.nasa.gov/gltf_embed/2370' width='100%' height='450px'
                            frameBorder='0' title="spirit rover"/>
                </div>
                <h3 className="spirit-description">Mars Exploration Rover - Spirit</h3>
                <p className="spirit-description">
                    One of two rovers launched in 2003 to explore Mars and search for signs of past life,
                    Spirit far outlasted her planned 90-day mission.
                </p>
                <div className="box">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className="section-2" style={{backgroundImage: `url(${spiritBackground})`}}>
                <div className="split">
                    <div className="spirit-image-container">
                        <Image className="spirit-image" src={sophoto} alt="spirit and opportunity standing side by side" />
                    </div>
                    <div className="spirit-content">
                        <h3 className="spirit-content-title">Mission overview</h3>
                        <p>"One of two rovers launched in 2003 to explore Mars and search for
                            signs of past life, Spirit far outlasted her planned 90-day mission.
                            Among her myriad discoveries, Spirit found evidence that Mars was once much
                            wetter than it is today and helped scientists better understand the Martian wind.
                        </p>
                        <p>In May 2009, the rover became embedded in soft soil at a site called "Troy"
                            with only five working wheels to aid in the rescue effort.
                            After months of testing and carefully planned maneuvers,
                            NASA ended efforts to free the rover and eventually ended the mission on May 25, 2011." - taken from https://www.jpl.nasa.gov/missions/mars-exploration-rover-spirit-mer-spirit
                        </p>
                        <p>
                            <a className="visit-mission" href="https://www.jpl.nasa.gov/missions/mars-exploration-rover-spirit-mer-spirit" target="_blank" rel="noreferrer">
                                Visit Spirit's mission page
                            </a>
                        </p>
                    </div>
                </div>

                <div className="bottom-link-container">
                    <h5>
                        <Link to="/mars/curiosity" className="bottom-links"><p>{`< MER Curiosity`}</p></Link>
                    </h5>
                    <h3>
                        <Link to="/mars/spirit-mission" className="bottom-links"><p>Mission Photos</p></Link>
                    </h3>
                    <h5>
                        <Link to="/mars/opportunity" className="bottom-links"><p>{`MER Opportunity >`}</p></Link>
                    </h5>
                </div>

            </div>
        </div>
    );
}

export default Spirit;

