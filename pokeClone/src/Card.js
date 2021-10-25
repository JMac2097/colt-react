import React from "react";
import "./card.css";

const Card = (this.props) => {
	// const Poke_API =
	// 	"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

	return (
		<div>
			<h1 className="Card-title">{this.props.name}</h1>
			<div className="Card-image">
				<img src={""} alt={this.props.name} />
			</div>
			<div className="Card-data">Type: {this.props.type}</div>
			<div className="Card-data">EXP: {this.props.exp}</div>
		</div>
	);
};

export default Card;
