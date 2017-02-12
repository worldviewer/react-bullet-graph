import React from 'react';
import './App.css';
import BulletGraph from './BulletGraph/BulletGraph';

const App = React.createClass({
	getInitialState: function() {
		return {
			mocks: [
				{
					title: "Revenue 2005 YTD",
					textLabel: "(U.S. $ in thousands)",
					scaleMin: 100,
					scaleMax: 300,
					performanceVal: 275,
					symbolMarker: 265,
					badVal: 200,
					satisfactoryVal: 250
				},
				{
					title: "Profit",
					textLabel: "%",
					scaleMin: 0,
					scaleMax: 30,
					performanceVal: 22.5,
					symbolMarker: 27,
					badVal: 20,
					satisfactoryVal: 25,
					unitsSuffix: "%"
				},
				{
					title: "Avg Order Size",
					textLabel: "U.S. $",
					scaleMin: 0,
					scaleMax: 600,
					performanceVal: 320,
					symbolMarker: 550,
					badVal: 350,
					satisfactoryVal: 500,
					unitsPrefix: "$"
				},
				{
					title: "New Customers",
					textLabel: "Count",
					scaleMin: 0,
					scaleMax: 2500,
					performanceVal: 1700,
					symbolMarker: 2100,
					badVal: 1400,
					satisfactoryVal: 2000,
					height: 100,
					width: 400
				},
				{
					title: "Cust Satisfaction",
					textLabel: "Top Rating of 5",
					scaleMin: 0,
					scaleMax: 5,
					performanceVal: 4.75,
					symbolMarker: 4.6,
					badVal: 3.5,
					satisfactoryVal: 4.4,
					unitsSuffix: " stars",
					width: 600
				},

			]
		}
	},

	render: function() {
		return (
			<div className="App">
				<div className="Container">

					{ this.state.mocks.map( (graph,i) => {
						return (
							<BulletGraph
								className="BulletGraph"
								key={i}
								title={graph.title}
								textLabel={graph.textLabel}
								scaleMin={graph.scaleMin}
								scaleMax={graph.scaleMax}
								performanceVal={graph.performanceVal}
								symbolMarker={graph.symbolMarker}
								badVal={graph.badVal}
								satisfactoryVal={graph.satisfactoryVal}
								unitsSuffix={graph.unitsSuffix}
								unitsPrefix={graph.unitsPrefix}
								height={graph.height}
								width={graph.width}
							/>
						)
					})}

				</div>

			</div>
		);
	}
})

export default App;
