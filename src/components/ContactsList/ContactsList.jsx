import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';
import css from '../ContactsList/ContactsList.module.css'

export const ContactsList = ({ contacts, onDeleteContact }) =>
(
	<ul className={css.ContactsList}>
		{
			contacts.map(({ name, number, id }) =>
			(
				<ContactsListItem key={id} name={name} number={number}>
					<button type='button' onClick={() => onDeleteContact(id)}>Delete</button>
				</ContactsListItem>
			)
			)}
	</ul>
)

