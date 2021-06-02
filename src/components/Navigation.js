import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

function Navigation() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0">
                <Nav>
                    <NavLink to="/" exact className="nav-link">spacefaXcts</NavLink>
                    <NavLink to="/about" className="nav-link mx-auto">ABOUT</NavLink>
                    <NavLink to="/mars" className="nav-link mx-auto">MARS</NavLink>
                    <NavLink to="/earth" className="nav-link mx-auto">EARTH</NavLink>
                    <NavLink to="/spotd" className="nav-link mx-auto">SPOTD</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;