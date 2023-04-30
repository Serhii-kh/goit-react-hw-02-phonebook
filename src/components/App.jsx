import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactsList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";
import shortid from "shortid";
import css from '../components/wrapper/wrapper.module.css';
// import css from '../components/ContactsList/ContactsList.module.css';



export class App extends Component {
	state = {
		contacts: [],
		filter: ''
	}

	addContact = (name, number) => {
		const contact = {
			name,
			number,
			id: shortid.generate(),
		}

		this.setState(prevState => ({
			contacts: [...prevState.contacts, contact]
		}))
	}

	onFilterChange = (filter) => {
		this.setState({
			filter,
		})
	}



	render() {
		const { contacts } = this.state;

		return (
			<div className={css.phonebook}>
				<h1>Phonebook</h1>
				<ContactForm onFormSubmit={this.addContact} contacts={contacts} />
				<h2>Contacts</h2>

				<Filter onFilterChange={ this.onFilterChange} />

				<ContactsList contacts={contacts} />
			</div>
		);
	}
};
