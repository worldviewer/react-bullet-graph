import React from 'react';
import './BulletGraph.css';

const BulletGraph = React.createClass({
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
		titleStyle: React.PropTypes.string,
		textFont: React.PropTypes.string,
		badColor: React.PropTypes.string,
		satisfactoryColor: React.PropTypes.string,
		goodColor: React.PropTypes.string		
	},

	getDefaultProps: function() {
		return {
			badColor: "#999999",
			satisfactoryColor: "#bbbbbb",
			goodColor: "#dddddd"
		}
	},

    render: function() {
        return (
            <div className="BulletGraph">

            </div>
        );
    }
});

export default BulletGraph;
