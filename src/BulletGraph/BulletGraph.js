import React from 'react';
import './BulletGraph.css';
import HorizontalBulletGraph from './HorizontalBulletGraph';
import VerticalBulletGraph from './VerticalBulletGraph';

const BulletGraph = React.createClass({
	propTypes: {
		orientation: React.PropTypes.string.isRequired,
		title: React.PropTypes.string.isRequired,
		textLabel: React.PropTypes.string.isRequired,
		scaleMin: React.PropTypes.number.isRequired,
		scaleMax: React.PropTypes.number.isRequired,
		performanceVal: React.PropTypes.number,
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
            	{ this.props.orientation === "horizontal" &&
            		<HorizontalBulletGraph
            			title={this.props.title}
            			textLabel={this.props.textLabel}
            			scaleMin={this.props.scaleMin}
            			performanceVal={this.props.performanceVal}
            			symbolMarker={this.props.symbolMarker}
            			badVal={this.props.badVal}
            			satisfactoryVal={this.props.satisfactoryVal}
            			scaleUnits={this.props.scaleUnits}
            			titleStyle={this.props.titleStyle}
            			textFont={this.props.textFont}
            			badColor={this.props.badColor}
            			satisfactoryColor={this.props.satisfactoryColor}
            			goodColor={this.props.goodColor} /> }

            	{ this.props.orientation === "vertical" &&
            		<VerticalBulletGraph
            			title={this.props.title}
            			textLabel={this.props.textLabel}
            			scaleMin={this.props.scaleMin}
            			performanceVal={this.props.performanceVal}
            			symbolMarker={this.props.symbolMarker}
            			badVal={this.props.badVal}
            			satisfactoryVal={this.props.satisfactoryVal}
            			scaleUnits={this.props.scaleUnits}
            			titleStyle={this.props.titleStyle}
            			textFont={this.props.textFont}
            			badColor={this.props.badColor}
            			satisfactoryColor={this.props.satisfactoryColor}
            			goodColor={this.props.goodColor} /> }

            </div>
        );
    }
});

export default BulletGraph;
