import { TwitDTO } from './twit.types';

export class TwitService {
	#twits: TwitDTO[] = [
		{
			id: 1,
			description: 'Hello world',
		},
		{
			id: 2,
			description: 'Goodbye world',
		},
	];

	create(twit: TwitDTO) {
		this.#twits.push(twit);
		return twit;
	}

	getAll() {
		return this.#twits;
	}

	getOne(id: number) {
		return this.#twits.find(t => t.id === id);
	}

	delete(id: number) {
		this.#twits = this.#twits.filter(t => t.id !== id);
	}

	update(id: number, todo: TwitDTO) {
		const index = this.#twits.findIndex(t => t.id === id);
		this.#twits[index] = todo;
	}
}
