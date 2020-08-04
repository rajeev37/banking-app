import React from "react";
import { Navbar, Nav} from 'react-bootstrap'
class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: "",
            isAdmin: false
        };
    }
    logout = () => {
        this.setState({currentUser: "abc"});
        window.location.href = "/login";
    }
    render() {
        const { currentUser, isAdmin } = this.state;
        console.log("*******", this.state);
        return (
            <Navbar bg="dark" expand="lg" variant="dark">
                <Navbar.Brand href="/">ABC Bank</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                {!currentUser &&
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                }
                {currentUser &&
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {isAdmin && <Nav.Link href="/account">Account</Nav.Link>}
                            {!isAdmin && <Nav.Link href="/account-summary">Account Detail</Nav.Link>}
                            <a onClick={this.logout} className="nav-item nav-link">Logout</a>
                        </Nav>
                    </Navbar.Collapse>
                }
            </Navbar>
        )
    }
}
export default Header;
