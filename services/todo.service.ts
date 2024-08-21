import { TodoDTO } from '../dto/todo.dto';

export class TodoService {
	todos = [
		{ id: 1, title: 'Todo 1', completed: false },
		{ id: 2, title: 'Todo 2', completed: true },
		{ id: 3, title: 'Todo 3', completed: false },
	];

	static getAll() {
		return this.todos;
	}

	static getOne(id: number) {
		return this.todos.find(t => t.id === id);
	}

	static create(todo: TodoDTO) {
		this.todos.push(todo);
	}

	static delete(id: number) {
		this.todos = this.todos.filter(t => t.id !== id);
	}

	static update(id: number, todo: TodoDTO) {
		const index = this.todos.findIndex(t => t.id === id);
		this.todos[index] = todo;
	}
}
