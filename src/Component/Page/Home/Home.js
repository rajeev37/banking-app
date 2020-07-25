import React from "react";
import axios from 'axios';
import { inject, observer } from "mobx-react";
const Home = inject("stores")(observer(class Home extends React.Component {
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
        this.setState({ customers: customers });
    }
    render() {
        return (
            <div>
                <p>Customer List:</p>
                <ul>
                    { this.state.customers.map(function(c) {
                        return <li key={c._id}>{c.name}</li>
                    })
                    }
                </ul>
            </div>
        )
    }
}));
export default Home;
