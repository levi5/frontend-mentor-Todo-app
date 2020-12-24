// import Image from 'next/image';
import { useContext, useState } from 'react';

import ContextTodo from '../../contexts/todo.context';
import Checkbox from 'components/Checkbox';
import { light, dark } from '../../config/theme';
import styles from './styles';
import Content from 'components/Content';

const Header = () => {
	const { addTodo, theme, setTheme } = useContext(ContextTodo);
	const [checked, setCheck] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const [themeName, selectTheme] = useState(theme);

	function createTodo(e: any) {
		if (e.key === 'Enter') {
			if (inputValue) {
				const id = new Date().toISOString() + inputValue.split(' ')[0];
				addTodo({
					id,
					value: inputValue,
					status: checked ? 'checked' : ''
				});
				setInputValue('');
			}
		}
	}

	function selected(e: any) {
		setCheck(e.target.checked);
	}

	function setThemes() {
		const theme = themeName === 'light' ? 'dark' : 'light';
		setTheme(theme);
		selectTheme(theme);
	}

	return (
		<styles.Header Theme={themeName === 'light' ? light : dark}>
			<div id="content-header">
				<div className="header-group-01">
					<div className="header-group-02">
						<h1>todo</h1>
						<span onClick={setThemes}></span>
					</div>
					<div className="header-content-inputs">
						<input
							type="text"
							name="todo-text"
							value={inputValue}
							checked={checked}
							placeholder="Create a new todo..."
							onChange={(e) => setInputValue(e.target.value)}
							onKeyDown={createTodo}
						/>
						<div className="content-checkbox">
							<Checkbox onClick={selected} />
						</div>
					</div>
				</div>
			</div>
			<Content />
		</styles.Header>
	);
};

export default Header;
