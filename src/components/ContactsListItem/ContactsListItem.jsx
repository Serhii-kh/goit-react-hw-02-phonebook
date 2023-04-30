import css from '../ContactsListItem/ContactsListItem.module.css'
// import shortid from 'shortid';

export const ContactsListItem = ({ name, number, children }) =>
(<li className={css.ContactsListItem} >
	<p>
		{name}: {number}
	</p>
	{children}
</li>)
