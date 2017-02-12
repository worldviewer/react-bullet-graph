import React, { Component } from 'react';
import './BulletGraph.css';

class BulletGraph extends Component {
	propTypes: {
		orientation: React.PropTypes.string.isRequired,
		title: React.PropTypes.string.isRequired,
		textLabel: React.PropTypes.string.isRequired,
		scaleMin: React.PropTypes.number.isRequired,
		scaleMax: React.PropTypes.number.isRequired,
		performanceValue: React.PropTypes.number,
		symbolMarker: React.PropTypes.number,
		badVal: React.PropTypes.number,
		satisfactoryVal: React.PropTypes.number,
		scaleUnits: React.PropTypes.string,
		titleStyle: React.PropTypes.string
	}

    render() {
        return (
            <div className="BulletGraph">
            	<p>testing</p>
            </div>
        );
    }
}

export default BulletGraph;
