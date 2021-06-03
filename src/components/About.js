import React from 'react';
import aboutBackground from "../images/about-background.jpeg";

function About() {
    return (
        <div className="about-container">
            <div className="about-section" style={{backgroundImage: `url(${aboutBackground})`}}>
                <h1 className="about-title">About</h1>
                <div className="about-content">
                    <p>spacefaXcts is a collection of projects NASA has undertaken since it's inception;
                        mainly it's Mars missions, as well as other space related facts.</p>
                    <p>Discover facts about space you've never knew!</p>
                    <p className="project-text">a project by <a href="https://www.linkedin.com/in/ninenigel9/" target="_blank" rel="noreferrer">Nigel Tay</a></p>
                </div>
            </div>
        </div>
    );
}

export default About;