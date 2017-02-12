import React, { Component } from 'react';
import './App.css';
import BulletGraph from './BulletGraph/BulletGraph';

class App extends Component {
    render() {
        return (
            <div className="App">
                <BulletGraph
                    orientation="horizontal"
                    title="Revenue 2005 YTD"
                    textLabel="(U.S. $ in thousands)"
                    scaleMin="0"
                    scaleMax="300"
                    performanceValue="275"
                    symbolMarker="265"
                    badVal="200"
                    satisfactoryVal="250"
                    scaleUnits="none" />
            </div>
        );
    }
}

export default App;
