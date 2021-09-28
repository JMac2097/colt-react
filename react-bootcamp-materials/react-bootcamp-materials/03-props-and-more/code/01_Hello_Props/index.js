class App extends React.Component {
	render() {
		return (
			<div>
				<Hello to="Ringo" from="Paul"></Hello>
				<Hello to="Zippy" from="Bungle"></Hello>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
