import React from "react";
import { Navbar, Nav, FormControl, Button, Form } from 'react-bootstrap'
class Header extends React.Component {
    render() {
        return (
            <Navbar bg="dark" expand="lg" variant="dark">
                <Navbar.Brand href="/">ABC Bank</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default Header;
