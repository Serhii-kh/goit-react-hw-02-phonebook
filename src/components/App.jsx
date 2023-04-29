import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
// import { Section } from "./Section/Section";
import css from '../components/wrapper/wrapper.module.css'



export class App extends Component {

	// state = {
	// 	contacts: [],
	// 	filter: ''
	// }

	render() {

		return (
			<div className={css.phonebook}>
				<h1>Phonebook</h1>
					<ContactForm />
				<h2>Contacts</h2>
				{/* <Filter /> */}
				{/* <ContactList /> */}
			</div>
		);
	}
};
