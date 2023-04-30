import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';
// import shortid from 'shortid';
import css from '../ContactsList/ContactsList.module.css'

export const ContactsList = ({ contacts }) =>
(
	<ul className={css.ContactsList}>
		{
			contacts.map(({ name, number, id }) =>
			(
				<ContactsListItem key={id} name={name} number={number} />)
			)}
	</ul>
)

