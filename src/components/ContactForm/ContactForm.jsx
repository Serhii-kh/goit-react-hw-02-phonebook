import { Component } from "react";
import css from '../ContactForm/ContactForm.module.css'
// import { nanoid } from "nanoid";

export class ContactForm extends Component {
	state = {
		contacts: [],
		name: ''
	}

	handleChange = e => {
		const { name, value } = e.currentTarget;
		this.setState(
			{ [name]: value },
		)
	}


	handleSubmit = e => {
		e.preventDefault();

		this.reset()
	}

	reset = () => {
		this.setState({
			name: '',
		})
	}


	render() {
		return (
			<form className={css.contactForm}
				onSubmit={this.handleSubmit}>
				<label>Name
					<input
						type="text"
						name="name"
						value={this.state.name}
						onChange={this.handleChange}
						pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
						required
					/>
				</label>
				<button type="submit">Add contact</button>
			</form>
		)
	}

}