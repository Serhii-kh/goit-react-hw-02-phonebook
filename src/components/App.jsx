import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactsList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";
import shortid from "shortid";
import css from '../components/wrapper/wrapper.module.css';
// import css from '../components/ContactsList/ContactsList.module.css';



export class App extends Component {
	state = {
		contacts: [
			{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
			{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
			{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
			{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
		],

		filter: ''
	}

	addContact = (name, number) => {
		const { contacts } = this.state;
		const contact = {
			name,
			number,
			id: shortid.generate(),
		}

		contacts.forEach(contact => {
			if (contact.name === name) {
				alert(`${name} is allredy in contacts`)
			}
		});

		this.setState(prevState => ({
			contacts: [...prevState.contacts, contact]
		}))
	}

	onFilterChange = (filter) => {
		// const { contacts } = this.state
		this.setState({
			filter,
		})

		// let filteredContacts = [];
		// contacts.filter
		//  (contact => contact.name.includes(filter)? filteredContacts.push(contact) : continue)

	}



	render() {
		const { contacts } = this.state;

		return (
			<div className={css.phonebook}>
				<h1>Phonebook</h1>
				<ContactForm onFormSubmit={this.addContact} contacts={contacts} />
				<h2>Contacts</h2>
				<Filter onFilterChange={this.onFilterChange} />
				<ContactsList contacts={contacts} />
			</div>
		);
	}
};
