import React from 'react';
import {Image} from "react-bootstrap";
import {Link} from "react-router-dom";
import sophoto from "../images/spiritopportunity.png";
import opportunityBackground from "../images/mars-background.jpg";

function Opportunity() {
    return (
        <div className="opportunity-container">
            <div className="section-1">
                <h1 className="opportunity-title">Spirit and Opportunity</h1>
                <div className="model-container">
                    <iframe src='https://solarsystem.nasa.gov/gltf_embed/2370' width='100%' height='450px'
                            frameBorder='0' title="opportunity rover"/>
                </div>
                <h3 className="opportunity-description">Mars Exploration Rover - Opportunity</h3>
                <p className="opportunity-description">
                    Opportunity was the second of the two rovers launched in 2003
                    to land on Mars and begin traversing the Red Planet in search
                    of signs of past life.
                </p>
                <div className="box">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className="section-2" style={{backgroundImage: `url(${opportunityBackground})`}}>
                <div className="split">
                    <div className="opportunity-content">
                        <h3 className="opportunity-content-title">Mission overview</h3>
                        <p>"Opportunity was the second of the two rovers launched in 2003 to land on Mars and
                            begin traversing the Red Planet in search of signs of past life. The rover is still
                            actively exploring the Martian terrain, having far outlasted her planned 90-day mission.
                        </p>
                        <p>Since landing on Mars in 2004, Opportunity has made a number of discoveries about the
                            Red Planet including dramatic evidence that long ago at least one area of Mars stayed wet
                            for an extended period and that conditions could have been suitable for sustaining microbial life.
                        </p>
                        <p>The Opportunity rover stopped communicating with Earth when a severe Mars-wide dust storm blanketed
                            its location in June 2018. After more than a thousand commands to restore contact, engineers in
                            the Space Flight Operations Facility at NASA's Jet Propulsion Laboratory (JPL) made their last
                            attempt to revive Opportunity Tuesday, February 13, 2019, to no avail. The solar-powered rover's
                            final communication was received June 10." - taken from https://www.jpl.nasa.gov/missions/mars-exploration-rover-opportunity-mer
                        </p>
                        <p><a className="visit-mission" href="https://www.jpl.nasa.gov/missions/mars-exploration-rover-opportunity-mer" target="_blank" rel="noreferrer">
                            Visit Opportunity's mission page</a>
                        </p>
                    </div>
                    <div className="opportunity-image-container">
                        <Image className="opportunity-image" src={sophoto} alt="spirit and opportunity standing side by side" />
                    </div>
                </div>

                <div className="bottom-link-container">
                    <h5>
                        <Link to="/mars/spirit" className="bottom-links"><p>{`< MER Spirit`}</p></Link>
                    </h5>
                    <h3>
                        <Link to="/mars/opportunity-mission" className="bottom-links"><p>Mission Photos</p></Link>
                    </h3>
                    <h5>
                        <Link to="/mars/curiosity" className="bottom-links"><p>{`MER Curiosity >`}</p></Link>
                    </h5>
                </div>
            </div>
        </div>
    );
}

export default Opportunity;