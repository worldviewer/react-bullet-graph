import React from 'react';
import './HorizontalBulletGraph.css';

const HorizontalBulletGraph = React.createClass({
    render: function() {
    	let widthScale =  this.props.width / (this.props.scaleMax - this.props.scaleMin); // 

    	let horizontalBulletGraphStyles = {
    		display: "flex",
    		justifyContent: "center"
    	};

    	let graphStyles = {
    		position: "relative"
    	};

    	let goodValStyles = {
    		backgroundColor: this.props.goodColor,
    		height: this.props.height + "px",
    		width: this.props.width + "px",
    		zIndex: 1
    	};

    	let titleStyles = {
    		fontWeight: this.props.titleStyle,
    		lineHeight: this.props.height + "px"
    	};

    	let legendStyles = {
    		paddingRight: "5px"
    	};

    	let satisfactoryValStyles = {
    		backgroundColor: this.props.satisfactoryColor,
    		height: this.props.height + "px",
    		left: "0",
    		position: "absolute",
    		top: "0",
    		width: this.props.satisfactoryVal*widthScale + "px",
    		zIndex: 2
    	};

    	let badValStyles = {
    		backgroundColor: this.props.badColor,
    		height: this.props.height + "px",
    		left: "0",
    		position: "absolute",
    		top: "0",
    		width: this.props.badVal*widthScale + "px",
    		zIndex: 3
    	};

        return (
            <div className="HorizontalBulletGraph" style={horizontalBulletGraphStyles}>

            	<div className="Legend" style={legendStyles}>
	 				<div className="Title" style={titleStyles}>
	 					<h3>{this.props.title}</h3>
	 				</div>
	 				<div className="TextLabel">
	 					<p>{this.props.textLabel}</p>
	 				</div>
 				</div>

 				<div className="Graph" style={graphStyles}>
 					<div className="GoodVal"
 						style={goodValStyles}>
 						
 					</div>

 					{ this.props.satisfactoryVal &&
 						<div className="SatisfactoryVal" style={satisfactoryValStyles}>
 						
 					</div> }

 					{ this.props.badVal &&
 						<div className="BadVal" style={badValStyles}>
 						
 					</div> }

 					{ this.props.performanceValue && <div className="PerformanceVal">

 					</div> }

 					{ this.props.symbolMarker && <div className="SymbolMarker">

 					</div> }

 					<div className="QuantitativeScale">

 					</div>
 				</div>

            </div>
        );
    }
});

export default HorizontalBulletGraph;
