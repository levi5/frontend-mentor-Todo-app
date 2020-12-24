/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { strict } from 'assert';
import { createContext } from 'react';
type TodoItem = {
	id: string;
	value: string;
	status: string;
};

const todoList: TodoItem[] = [];
export default createContext({
	theme: 'light',
	setTheme: (name: string) => {},
	todoList,
	addTodo: (values: any) => {},
	updateTodo: (values: any) => {},
	removeTodo: (id: string) => {},
	clearCompleted: () => {}
});
