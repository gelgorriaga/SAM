import React, { Component } from 'react';
import LCC from 'lightning-container';
import Selector from './Selector';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
            num: 5
        }
        this.callApex = this.callApex.bind(this);
        this.handleResponse = this.handleResponse.bind(this);
    }

    componentDidMount() {
        this.setState({ isLoaded: false })
        setTimeout(() => {
            this.callApex();
            this.setState({ isLoaded: true })
        }, 1500);

    }

    callApex() {
        LCC.callApex("reactController.hello",
            this.state.num,
            this.handleResponse,
            { escape: true });
    }

    handleResponse(result, event) {
        if (event.status) {
            console.log(result);
        }
        else {
            console.log(event.message + " : " + event.where);
        }
    }

    render() {
        return (
            <div>
                {this.state.isLoaded
                    ? <Selector />
                    : <div className="spinner"></div>
                }
                {/* <button onClick={this.callApex}>CALL APEX</button> */}
            </div>
        );
    }
}

export default App;
