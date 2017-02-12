import React from 'react';
import HorizontalBulletGraph from './HorizontalBulletGraph';

const BulletGraph = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
		textLabel: React.PropTypes.string.isRequired,
		scaleMin: React.PropTypes.number.isRequired,
		scaleMax: React.PropTypes.number.isRequired,
		performanceVal: React.PropTypes.number,
		symbolMarker: React.PropTypes.number,
		badVal: React.PropTypes.number,
		satisfactoryVal: React.PropTypes.number,
		unitsPrefix: React.PropTypes.string,
		unitsSuffix: React.PropTypes.string,
		titleStyle: React.PropTypes.string,
		textFont: React.PropTypes.string,
		badColor: React.PropTypes.string,
		satisfactoryColor: React.PropTypes.string,
		goodColor: React.PropTypes.string,
		height: React.PropTypes.number,
		width: React.PropTypes.number
	},

	getDefaultProps: function() {
		return {
			badColor: "#999999",
			satisfactoryColor: "#bbbbbb",
			goodColor: "#dddddd",
			width: 500,
			height: 38
		}
	},

    render: function() {
        return (
            <div className="BulletGraph">
        		<HorizontalBulletGraph
        			title={this.props.title}
        			textLabel={this.props.textLabel}
        			scaleMin={this.props.scaleMin}
        			scaleMax={this.props.scaleMax}
        			performanceVal={this.props.performanceVal}
        			symbolMarker={this.props.symbolMarker}
        			badVal={this.props.badVal}
        			satisfactoryVal={this.props.satisfactoryVal}
        			unitsSuffix={this.props.unitsSuffix}
        			unitsPrefix={this.props.unitsPrefix}
        			titleStyle={this.props.titleStyle}
        			textFont={this.props.textFont}
        			badColor={this.props.badColor}
        			satisfactoryColor={this.props.satisfactoryColor}
        			goodColor={this.props.goodColor}
        			height={this.props.height}
        			width={this.props.width} />
            </div>
        );
    }
});

export default BulletGraph;
