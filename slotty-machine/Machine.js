class Machine extends React.Component {
	render() {
		const { s1, s2, s3 } = this.props;
		const style = { fontSize: "50px", backgroundColor: "purple" };

		let message = s1 === s2 && s2 === s3;

		return (
			<div>
				<div style={style}>
					{s1} {s2} {s3}
				</div>
				<div>{message ? "You Win" : "You lose!"}</div>
			</div>
		);
	}
}
