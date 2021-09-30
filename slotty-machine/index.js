class App extends React.Component {
	render() {
		return (
			<div>
				<h1>This is a slot machine!!</h1>
				<Machine symbol1="x" symbol2="y" symbol3="z" />
				<Machine symbol1="x" symbol2="x" symbol3="x" />
				<Machine symbol1="y" symbol2="z" symbol3="z" />
				<Machine symbol1="z" symbol2="y" symbol3="x" />
				<Machine symbol1="1" symbol2="2" symbol3="3" />
				<Machine symbol1="1" symbol2="3" symbol3="3" />
				<Machine symbol1="2" symbol2="2" symbol3="2" />
				<Machine symbol1="1" symbol2="1" symbol3="1" />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
