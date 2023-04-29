import { Component } from "react";
// import { useId } from 'react';
// import { nanoid } from "nanoid";



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
		const userId = useId();

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
				{userId}
			</div>
		);
	}
};
