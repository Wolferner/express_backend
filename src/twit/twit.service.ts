import { twitSchema } from './twit.schema';
import { TwitDTO } from './twit.types';

class TwitService {
	#twits: TwitDTO[] = [
		{
			id: 1,
			text: 'Hello world',
		},
		{
			id: 2,
			text: 'Goodbye world',
		},
	];

	async create(twit: TwitDTO) {
		const validation = await twitSchema.safeParse(twit);
		if (!validation.success) {
			throw new Error('Incorrect data');
		}

		this.#twits.push(twit);
		return twit;
	}

	getAll() {
		return this.#twits;
	}

	getOne(id: number) {
		if (!id) throw new Error('Id is required');
		return this.#twits.find(t => t.id === id);
	}

	delete(id: number) {
		if (!id) throw new Error('Id is required');
		this.#twits = this.#twits.filter(t => t.id !== id);
	}

	update(id: number, twit: TwitDTO) {
		const validation = twitSchema.safeParse(twit);
		if (!id) throw new Error('Id is required');
		if (!validation.success) {
			throw new Error('Incorrect data');
		}
		const index = this.#twits.findIndex(t => t.id === id);
		this.#twits[index] = twit;
	}
}

export const twitService = new TwitService();
