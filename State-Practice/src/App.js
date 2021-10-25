import React, { Component } from "react";
import Game from "./Game";
import Button from "./Button";
import Rando from "./Rando";

export class App extends Component {
	render() {
		return (
			<div>
				<Rando maxNum={7} />

				<Button />
			</div>
		);
	}
}

export default App;
