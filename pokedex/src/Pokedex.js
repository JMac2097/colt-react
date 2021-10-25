import React, { Component } from "react";
import "./pokedex.css";
import Pokecard from "./Pokecard";

class Pokedex extends Component {
	render() {
		let title;
		if (this.props.isWinner) {
			title = <h1 className="Pokedex-winner">Winning Hand</h1>;
		} else {
			title = <h1 className="Pokedex-loser">Losing Hand</h1>;
		}
		let pokemons = this.props.pokemon.map((p, index) => (
			<Pokecard
				key={index}
				id={p.id}
				name={p.name}
				type={p.type}
				exp={p.exp}
			/>
		));

		return (
			<div className="Pokedex">
				{title}
				<h4>Total Experience: {this.props.exp}</h4>
				<div className="Pokedex-cards">{pokemons}</div>
			</div>
		);
	}
}

export default Pokedex;
