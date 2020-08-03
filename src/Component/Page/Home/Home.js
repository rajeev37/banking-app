import React from "react";
import axios from 'axios';
import { inject, observer } from "mobx-react";
import Table from 'react-bootstrap/Table'
const Home = inject("stores")(class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: []
        }
    };

    async componentDidMount() {
        // TODO.. api response should come from axios store.
        const response = await axios.get(`http://localhost:5000/customer`);
        const customers = await response.data;
        console.log("*8", this.props.stores.AppStore.customersList)
        this.setState({ customers: customers });
    }
    render() {
        return (
            <div>
                <p>This is Banking Application</p>
                <p>Use below credentials for login:</p>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>User Type</th>
                            <th>Username</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.customers.map(function(c, i, k) {
                            return <tr key={c._id}>
                                    <td><strong>{c.type}</strong></td>
                                    <td> {c.username}</td>
                                    <td>{c.password}</td>
                                </tr>
                        })}
                    </tbody>
                </Table>
            </div>
        )
    }
});
export default Home;
