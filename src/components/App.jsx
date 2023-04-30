import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactsList } from "./ContactsList/ContactsList";
import shortid from "shortid";
import css from '../components/wrapper/wrapper.module.css';
// import css from '../components/ContactsList/ContactsList.module.css';



export class App extends Component {
	// state = {
	// 	contacts: [],
	// 	filter: ''
	// }

	state = {
		contacts: [],

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
		console.log(name)
		console.log(number)

	}

	render() {
		const { contacts } = this.state;
		// console.log(contacts)

		return (
			<div className={css.phonebook}>
				<h1>Phonebook</h1>
				<ContactForm onFormSubmit={this.addContact} contacts={contacts} />
				<h2>Contacts</h2>
				{/* <ul>
					{
						contacts.map(({ name, number }) =>
							<li key={shortid.generate()}>
								<p>
									{name}: {number}
								</p>
							</li>
						)}
				</ul> */}
				{/* <Filter /> */}
				<ContactsList contacts={contacts} />
			</div>
		);
	}
};
