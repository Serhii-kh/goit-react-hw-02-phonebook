import { Component } from "react"


export class Filter extends Component {
	state = {
		filter: '',
	}

	handleChange = (e) => {
		const { name, value } = e.currentTarget
		const { filter } = this.state

		this.setState({
			[name]: value
		})

		this.props.onFilterChange(filter)
	}

	render() {
		return (
			<label>Find contacts by name
				<input
					type="text"
					name="filter"
					value={this.state.filter}
					onChange={this.handleChange}
					pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
					title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
					required
				/>
			</label>
		)
	}
}