import { Router, type Request, type Response } from 'express';
import { twitSchema } from './twit.schema';
import { TwitService } from './twit.service';

//Controllers need only for handling requests and responses + validation
//All logic should be in services
const router = Router();

const twitService = new TwitService();

router.get('/', async (req: Request, res: Response) => {
	try {
		const twits = await twitService.getAll();
		res.status(200).json(twits);
	} catch (error) {
		res.status(500).json({ message: 'Internal server error', error });
	}
});

router.get('/:id', async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		if (!id) {
			res.status(400).json({ message: 'Id is required' });
		}
		const twits = await twitService.getOne(Number(id));
		return res.status(200).json(twits);
	} catch (error) {
		res.status(500).json({ message: 'Internal server error', error });
	}
});

router.post('/', async (req: Request, res: Response) => {
	const newTwit = req.body;
	const validation = await twitSchema.safeParse(newTwit);

	if (!validation.success) {
		return res.status(400).json({ message: validation.error.message });
	}

	try {
		const twits = await twitService.create(newTwit);
		res.status(201).json(twits);
	} catch (error) {
		res.status(500).json({ message: 'Internal server error', error });
	}
});

router.put('/:id', async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const newTwit = req.body;
		const validation = twitSchema.safeParse(newTwit);
		if (!id) {
			return res.status(400).json({ message: 'Id is required' });
		}
		if (!validation.success) {
			return res.status(400).json({ message: validation.error.message });
		}
		const twits = await twitService.update(Number(id), newTwit);
		res.status(200).json(twits);
	} catch (error) {
		res.status(500).json({ message: 'Internal server error', error });
	}
});

router.delete('/:id', async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		if (!id) {
			return res.status(400).json({ message: 'Id is required' });
		}

		const twits = await twitService.delete(Number(id));
		res.status(200).json(twits);
	} catch (error) {
		res.status(500).json({ message: 'Internal server error', error });
	}
});

export const twitRouter = router;
