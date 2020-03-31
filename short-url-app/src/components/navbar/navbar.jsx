import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import logo from './logo.svg';


export default class NavBar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        height="50"
                        className="d-inline-block align-top width-auto"
                        alt="Shorten"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/shorten">Shorten</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
