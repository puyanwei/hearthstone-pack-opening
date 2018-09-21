import React, { Component } from 'react';
import axios from 'axios';

import API_KEY from './apiKey';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hearthstone Packs</h1>
                <p>PANEL COMPONENT</p>
                <button>Open Packs!</button>
            </div>
        );
    }

    componentDidMount() {
        this.getAPIData();
    }

    getAPIData = () => {
        const url = 'https://omgvamp-hearthstone-v1.p.mashape.com/cards';

        axios
            .get(url, {
                headers: { 'X-Mashape-Key': API_KEY }
            })
            .then(response => {
                console.dir(response);
            })
            .catch(error => {
                console.log(error);
            });
    };
}

export default App;
