import { useContext } from 'react';

import Header from '../Header/index';
import Footer from 'components/Footer';

import ContextTodo from '../../contexts/todo.context';
import { light, dark } from '../../config/theme';

import * as styles from './styles';

const Main = () => {
	const { theme } = useContext(ContextTodo);
	return (
		<styles.Wrapper Theme={theme === 'light' ? light : dark}>
			<Header />
			<Footer />
		</styles.Wrapper>
	);
};

export default Main;
