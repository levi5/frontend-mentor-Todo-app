import { AppProps } from 'next/app';
import Head from 'next/head';
import { useContext, useState } from 'react';

import ContextTodo from '../contexts/todo.context';
import { light, dark } from '../config/theme';

import GlobalStyle from 'styles/global';
type TodoItem = {
	id: string;
	value: string;
	status: string;
};
type Props = {
	theme: string;
	todoList: TodoItem[];
};

const App = ({ Component, pageProps }: AppProps) => {
	const { todoList, theme } = useContext(ContextTodo);

	const [data, setData] = useState<Props>({
		theme,
		todoList: todoList
	});

	const setTheme = (name: string) => {
		const theme = name;
		setData({
			...data,
			theme
		});
	};

	const addTodo = (values: any) => {
		const newTodoList = [...data.todoList];
		newTodoList.push(values);
		setData({
			...data,
			todoList: newTodoList
		});
	};

	const updateTodo = (values: any) => {
		const newTodoList = data.todoList.map((todoItem) => {
			if (todoItem.id === values.id) {
				todoItem.value = values.value;
				todoItem.status = values.status;
			}
			return todoItem;
		});

		setData({
			...data,
			todoList: newTodoList
		});
	};

	const removeTodo = (id: string) => {
		const newTodoList = data.todoList.filter((todoItem) => {
			if (todoItem.id !== id) return todoItem;
		});
		setData({
			...data,
			todoList: newTodoList
		});
	};
	const clearCompleted = () => {
		const newTodoList = data.todoList.filter((todoItem) => {
			if (!todoItem.status) return todoItem;
		});

		setData({
			...data,
			todoList: newTodoList
		});
	};

	const values = {
		theme: data.theme,
		setTheme,
		todoList: data.todoList,
		addTodo,
		updateTodo,
		removeTodo,
		clearCompleted
	};
	return (
		<>
			<Head>
				<title>Todo app</title>

				<link
					href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
					rel="stylesheet"
				/>
				<link rel="shortcut icon" href="/assets/favicon-32x32.png" />
				<link rel="apple-touch-icon" href="" />
				<link rel="description" href="" />
				<link rel="manifest" href="/manifest.json" />
				<meta
					name="description"
					content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
				/>
			</Head>

			<ContextTodo.Provider value={values}>
				<ContextTodo.Consumer>
					{() => (
						<>
							<GlobalStyle
								Theme={data.theme === 'light' ? light : dark}
							/>
							<Component {...pageProps} />
						</>
					)}
				</ContextTodo.Consumer>
			</ContextTodo.Provider>
		</>
	);
};

export default App;
