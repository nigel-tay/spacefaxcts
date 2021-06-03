import React from 'react';
import {Container, Dropdown, DropdownButton, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import DropdownMenu from "react-bootstrap/DropdownMenu";

function Navigation() {
    return (
        <Navbar variant="dark" expand="lg" className="navbar-main">
            <Container className="nav-container">
                <div>
                    <Navbar.Brand><NavLink to="/" exact className="nav-spacefaxcts"><h3>spacefaXcts</h3></NavLink></Navbar.Brand>
                </div>
                <div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto other-links">
                            <NavLink to="/about" className="nav-link link"><p>ABOUT</p></NavLink>
                            <NavLink to="/earth" className="nav-link link"><p>EARTH</p></NavLink>
                            <NavLink to="/mars" className="nav-link link"><p>MARS</p></NavLink>
                            <NavLink to="/spotd" className="nav-link link"><p>SPOTD</p></NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    );
}

export default Navigation;

// //

// <Navbar bg="color" sticky="top" variant="dark" expand="sm" collapseOnSelect>
//     <Navbar.Brand>
//         <NavLink to="/" exact className="nav-link">spacefaXcts</NavLink>
//     </Navbar.Brand>
//
//     <Navbar.Toggle />
//     <Navbar.Collapse>
//         <Nav>
//             <NavLink to="/about" className="nav-link">ABOUT</NavLink>
//             <NavLink to="/earth" className="nav-link">EARTH</NavLink>
//             <NavLink to="/spotd" className="nav-link">SPOTD</NavLink>
//             <NavDropdown className="nav-link" id="mars-dropdown" title="MARS">
//                 <NavDropdown.Item><NavLink to="/mars" className="nav-link">MARS</NavLink></NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item><NavLink to="/mars/spirit" className="nav-link">SPIRIT</NavLink></NavDropdown.Item>
//                 <NavDropdown.Item><NavLink to="/mars/opportunity" className="nav-link">OPPORTUNITY</NavLink></NavDropdown.Item>
//                 <NavDropdown.Item><NavLink to="/mars/curiosity" className="nav-link">CURIOSITY</NavLink></NavDropdown.Item>
//             </NavDropdown>
//         </Nav>
//     </Navbar.Collapse>
// </Navbar>