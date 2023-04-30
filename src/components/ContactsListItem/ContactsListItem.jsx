// import { Component } from 'react';
import css from '../ContactsListItem/ContactsListItem.module.css'

// handleDeleteContact = () => {}

export const ContactsListItem  = ({name, number}) => 
	(<li className={css.ContactsListItem}>
			<p>
				{name}: {number}
			</p>
			<button type='button'>Delete</button>
		</li>)

// onClick = { handleDeleteContact }