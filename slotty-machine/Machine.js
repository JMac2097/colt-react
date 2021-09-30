class Machine extends React.Component {
	render() {
		const sym1 = this.props.symbol1;
		const sym2 = this.props.symbol2;
		const sym3 = this.props.symbol3;

		let message;
		if (sym1 === sym2 && sym2 === sym3) {
			message = <p> You Wins</p>;
		} else {
			message = <p>You loses!</p>;
		}

		return (
			<div>
				<div>
					{sym1} {sym2} {sym3}
				</div>
				<div>{message}</div>
			</div>
		);
	}
}
