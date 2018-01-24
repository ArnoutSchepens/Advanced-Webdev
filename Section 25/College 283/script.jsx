class RandomBox extends React.Component {
	render() {
		const backgroundColor = ['red', 'green', 'blue', 'black'][
			Math.floor(Math.random() * 4)
		];
		const fontSize = Math.floor(Math.random() * 80) + 20;

		const divStyle = {
			backgroundColor,
			fontSize: fontSize + 'px',
			color: 'white',
			display: "flex",
			alignItems: 'center',
			justifyContent: "center",
			height: '200px',
			width: '500px'
		};

		return <div style={divStyle}>Make a box here!</div>;
	}
}

ReactDOM.render(<RandomBox />, document.querySelector('#app'));
