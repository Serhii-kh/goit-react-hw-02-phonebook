import { Component } from "react";

export class App extends Component {
	state = {
		contacts: [],
		name: ''
	}

	// state = {
	// 	contacts: [],
	// 	filter: ''
	// }




	render() {
		return (
			<div
				style={{
					height: '100vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					fontSize: 40,
					color: '#010101'
				}}
			>
				React homework template
			</div>
		);
	}
};
