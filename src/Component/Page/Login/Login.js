import React from "react";
import { Form, Button} from 'react-bootstrap'
import { inject, observer } from "mobx-react";
import { history } from '../../../util';
const Login = inject("stores")(class Login extends React.Component {
    handleClick = (e) => {
        e.preventDefault();
        this.props.stores.AppStore.setUserAuth("Admin", true);
        // history.push('/account')
        window.location.href = "/account";
    }
    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter Username" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button
                        variant="primary"
                        type="submit"
                        onClick={this.handleClick}
                        >
                        Submit
                    </Button>
                </Form>
            </div>

        )
    }
})
export default Login;
