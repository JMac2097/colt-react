class Hello extends React.Component {
	render() {
		console.log(this.props);
		return (
			<p>
				Howdy {this.props.to} from {this.props.from}
			</p>
		);
	}
}
