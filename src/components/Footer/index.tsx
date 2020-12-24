import { useContext } from 'react';

import ContextTodo from '../../contexts/todo.context';
import { light, dark } from '../../config/theme';

import styles from './styles';

const Footer = () => {
	const { theme } = useContext(ContextTodo);
	return (
		<styles.Footer Theme={theme === 'light' ? light : dark}>
			<h3>Challenge by Frontend Mentor. Coded by Levi Prudêncio.</h3>
		</styles.Footer>
	);
};

export default Footer;
