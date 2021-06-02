import React from 'react';
import Footer from "./Footer";

function About() {
    return (
        <div className="about-container">
            <div className="about-section">
                <h1 className="about-title">About</h1>
                <div className="about-content">
                    <p>spacefaXcts is a collection of projects NASA has undertaken since it's inception;
                        mainly it's Mars missions, as well as other space related facts.</p>
                    <p>Discover facts about space you've never knew!</p>
                    <p className="project-text">a project by Nigel Tay</p>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default About;