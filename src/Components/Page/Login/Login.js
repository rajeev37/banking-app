import React from "react";
import axios from 'axios';
import { Form, Button} from 'react-bootstrap';
import { inject, observer } from "mobx-react";
@inject("rootStore")
@observer
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          user: {username: "", password: ""}
        }
    }

    // handle input change
    handleInputChange = (e, index) => {
        const {name, value} = e.target;
        const user = {...this.state.user};
        user[name] = value;
        this.setState({user})
    };
    async handleClick(e) {
        e.preventDefault();
        const { username, password } = this.state.user;
        const response = await axios.post(`http://localhost:5000/customer/login`, {username: username, password: password});
        const data = await response.data;
        this.props.rootStore.appStore.setUserAuth(data);
        if(data.role === "admin") {
            this.props.history.push("/account");
        } else if(data.role === "customer") {
            this.props.history.push("/account-summary");
        } else {
            
        }
        
    }
    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                        type="text"
                        name="username"
                        value={this.state.user.username}
                        placeholder="Enter Username"
                        onChange={e => this.handleInputChange(e)}
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                        type="text"
                        name="password"
                        value={this.state.user.password}
                        placeholder="Enter Password"
                        onChange={e => this.handleInputChange(e)}
                      />
                    </Form.Group>
                    <Button
                        variant="primary"
                        type="submit"
                        onClick={(e) => this.handleClick(e)}
                        >
                        Submit
                    </Button>
                </Form>
            </div>

        )
    }
}
export default Login;
