import React from "react";
import { Navbar, Nav} from 'react-bootstrap';
import { inject, observer } from "mobx-react";
import { toast } from 'react-toastify';
@inject("rootStore")
@observer
class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    logout = () => {
        toast("LogOut Successfully.");
        this.props.rootStore.appStore.logout();
        // window.location.href = "/";
    }
    render() {
        const { authUser } = this.props.rootStore && this.props.rootStore.appStore;
        return (
            <Navbar bg="dark" expand="lg" variant="dark">
                <Navbar.Brand href="/">ABC Bank</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                {!authUser.isLogin &&
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                }
                {authUser.isLogin &&
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {authUser.role ==="admin" && <Nav.Link href="/account">Account</Nav.Link>}
                            {authUser.role ==="user" && <Nav.Link href="/account-summary">Account Detail</Nav.Link>}
                            <a onClick={this.logout} className="nav-item nav-link">Logout</a>
                        </Nav>
                    </Navbar.Collapse>
                }
            </Navbar>
        )
    }
}
export default Header;
