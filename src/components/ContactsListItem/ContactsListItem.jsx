import css from '../ContactsListItem/ContactsListItem.module.css'

export const ContactsListItem = ({ name, number}) => (
	<li className={css.ContactsListItem}>
		<p>
			{name}: {number}
		</p>
	</li>
)