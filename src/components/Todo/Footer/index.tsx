import { useContext } from 'react';

import ContextTodo from '../../../contexts/todo.context';
import { light, dark } from '../../../config/theme';

import * as styles from './styles';

const Footer: React.FC<any> = ({ option, listTodo }) => {
	const { theme } = useContext(ContextTodo);
	return (
		<styles.Wrapper Theme={theme === 'light' ? light : dark}>
			<nav>
				<ul>
					<li
						id="opc-all"
						className={option === 0 ? 'active' : ''}
						onClick={listTodo}
					>
						All
					</li>
					<li
						id="opc-active"
						className={option === 1 ? 'active' : ''}
						onClick={listTodo}
					>
						Active
					</li>
					<li
						id="opc-completed"
						className={option === 2 ? 'active' : ''}
						onClick={listTodo}
					>
						Completed
					</li>
				</ul>
			</nav>
		</styles.Wrapper>
	);
};
export default Footer;
