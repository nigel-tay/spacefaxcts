import React from 'react';
import {Image} from "react-bootstrap";
import {Link} from "react-router-dom";
import sophoto from "../images/spiritopportunity.png";
import spiritopportunity from "../models/spirit_opportunity.glb";

function Opportunity(props) {
    return (
        <div className="opportunity-container">
            <div className="section-1">
                <h1 className="opportunity-title">Spirit and Opportunity</h1>
                <div className="model-container">
                    <model-viewer src={spiritopportunity}
                                  alt="A 3D model of opportunity"
                                  ar ar-modes="webxr scene-viewer quick-look"
                                  environment-image="neutral" auto-rotate camera-controls />
                </div>
                <h3 className="opportunity-description">Mars Exploration Rover - Opportunity</h3>
                <p className="opportunity-description">
                    Opportunity was the second of the two rovers launched in 2003
                    to land on Mars and begin traversing the Red Planet in search
                    of signs of past life.
                </p>
                <div className="scroll">scroll placeholder</div>
            </div>

            <div className="section-2">
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
                        <p><a href="https://www.jpl.nasa.gov/missions/mars-exploration-rover-opportunity-mer" target="_blank" rel="noreferrer">
                            Visit Opportunity's mission page</a>
                        </p>
                    </div>
                    <div className="opportunity-image-container">
                        <Image className="opportunity-image" src={sophoto} alt="" />
                    </div>
                </div>

                <div className="bottom-links">
                    <h5>
                        <Link to="/mars/spirit">{`< MER Spirit`}</Link>
                    </h5>
                    <h3>
                        <Link to="/mars/opportunity-mission">Mission Photos</Link>
                    </h3>
                    <h5>
                        <Link to="/mars/curiosity">{`MER Curiosity >`}</Link>
                    </h5>
                </div>
            </div>
        </div>
    );
}

export default Opportunity;