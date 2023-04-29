import css from '../ContactsList/ContactsList.module.css'

export const ContactsList = ({ children }) => (
	<ul className={css.ContactsList}>
		{children}
	</ul>
)