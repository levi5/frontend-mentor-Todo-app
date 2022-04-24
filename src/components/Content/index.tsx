import { useContext, useEffect, useState } from 'react';

import ContextTodo from '../../contexts/todo.context';
import Checkbox from 'components/Checkbox';
import Footer from 'components/Todo/Footer';

import { light, dark } from '../../config/theme';
import styles from './styles';

const Content: any = () => {
	const { theme, todoList, updateTodo, removeTodo, clearCompleted } =
		useContext(ContextTodo);

	const [themeName, selectTheme] = useState(theme);
	const [todo, setTodo] = useState(todoList);
	const [option, setOption] = useState(0);

	let amount = 0;

	useEffect(() => {
		selectTheme(theme);
	}, [theme]);

	useEffect(() => {
		setTodo(todoList);
	}, [todoList]);

	function setAmount() {
		amount = amount + 1;
		return amount;
	}

	function check(e: any) {
		const { checked } = e.target;
		const { id } = e.target.dataset;

		let values = {};
		todoList.filter((todoItem) => {
			if (todoItem.id === id) {
				values = {
					...todoItem
				};
				return values;
			}
		});

		values = {
			...values,
			status: checked ? 'checked' : ''
		};

		if (values) {
			updateTodo(values);
			setTodo(todoList);
		}
	}
	function listTodo(e: any) {
		const { id } = e.target;
		if (id === 'opc-all') setOption(0);
		else if (id === 'opc-active') setOption(1);
		else if (id === 'opc-completed') setOption(2);
	}

	function remove(e: any) {
		const { id } = e.target.dataset;
		if (id) removeTodo(id);
	}

	return (
		<styles.Wrapper
			id="content"
			Theme={themeName === 'light' ? light : dark}
		>
			<div id="todo-area">
				<div className="todo-content">
					{todo
						.slice(0)
						.reverse()
						.map((todoItem) => {
							if (option === 1) if (todoItem.status) return;
							if (option === 2) if (!todoItem.status) return;

							setAmount();

							return (
								<div className="todo-li" key={todoItem.id}>
									<div>
										<div className="todo-content-checkbox">
											<Checkbox
												data-id={todoItem.id}
												checked={
													todoItem.status
														? true
														: false
												}
												onChange={check}
											/>
										</div>
										<h3
											className={
												todoItem.status
													? 'complete'
													: ''
											}
										>
											{todoItem.value}
										</h3>
									</div>
									<div
										className="remove-todo"
										onClick={remove}
									>
										<img
											data-id={todoItem.id}
											src="/assets/icon-cross.svg"
											alt="remove todo"
										/>
									</div>
								</div>
							);
						})}
				</div>

				<div className="todo-footer">
					<h5>{amount} items left</h5>
					<div id="menu-options-desktop">
						<Footer option={option} listTodo={listTodo} />
					</div>
					<span id="opc-clear" onClick={clearCompleted}>
						Clear Completed
					</span>
				</div>
			</div>
			<div id="menu-options-mobile">
				<Footer option={option} listTodo={listTodo} />
			</div>
		</styles.Wrapper>
	);
};

export default Content;
