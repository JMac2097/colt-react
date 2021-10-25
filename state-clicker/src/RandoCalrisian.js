import React, { Component } from "react";

class Randocalrisian extends Component {
	constructor(props) {
		super(props);
		this.state = {
			num: 1,
			hasWon: false,
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick = function (e) {
		const rando = Math.floor(Math.random() * 10) + 1;
		if (rando === 9) this.setState({ hasWon: true });
		this.setState({ num: rando });
	};

	render() {
		return (
			<div>
				<p>Here is a number {this.state.num}</p>

				{!this.state.hasWon ? (
					<button onClick={this.handleClick}>
						Click for numberz
					</button>
				) : (
					<p>You have won!!!</p>
				)}
			</div>
		);
	}
}

export default Randocalrisian;
