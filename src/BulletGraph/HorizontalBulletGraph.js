import React from 'react';
import './HorizontalBulletGraph.css';

const HorizontalBulletGraph = React.createClass({
    render: function() {
        return (
            <div className="HorizontalBulletGraph">
            	<div className="Legend">
	 				<div className="Title">
	 					{this.props.title}
	 				</div>
	 				<div className="TextLabel">
	 					{this.props.textLabel}
	 				</div>
 				</div>
 				<div className="Graph">
 					<div className="GoodVal">
 						
 					</div>

 					{ this.props.satisfactoryVal && <div className="SatisfactoryVal">
 						
 					</div> }

 					{ this.props.badVal && <div className="BadVal">
 						
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
