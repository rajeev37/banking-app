import React from "react";
import axios from 'axios';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: []
        }
    };
    componentDidMount() {
        axios.get('http://localhost:5000/customer')
          .then((response) => {
            console.log("***res", response.data);
            this.setState({
                customers: response.data
            })
          });
          
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
}
export default Home;
