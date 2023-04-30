import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactsList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";
import shortid from "shortid";
import css from '../components/wrapper/wrapper.module.css';


export class App extends Component {
	state = {
		contacts: [

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
				alert(`${name} is allredy in contacts!`)
			}
		});
		
		this.setState(prevState => ({
			contacts: [...prevState.contacts, contact]
		}))
	}

	changeFilter = e => {
		const { value } = e.currentTarget

		this.setState({
			filter: value
		})
	}

	getFilteredContacts = () => {
		const { contacts, filter } = this.state;
		const normalizedFilter = filter.toLowerCase();

		return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
	}


	render() {
		const { contacts, filter } = this.state;
		const filteredContacts = this.getFilteredContacts()

		return (
			<div className={css.phonebook}>
				<h1>Phonebook</h1>
				<ContactForm onFormSubmit={this.addContact} contacts={contacts} />
				<h2>Contacts</h2>
				<Filter value={filter} onChange={this.changeFilter} />
				<ContactsList contacts={filteredContacts} />
			</div>
		);
	}
};
