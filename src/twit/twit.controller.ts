import { Router, type Request, type Response } from 'express';
import { twitSchema } from './twit.schema';
import { TwitService } from './twit.service';

//Controllers need only for handling requests and responses + validation
//All logic should be in services
const router = Router();

const twitService = new TwitService();

router.get('/', async (req: Request, res: Response) => {
	const twits = await twitService.getAll();
	res.status(200).json(twits);
});

router.get('/:id', async (req: Request, res: Response) => {
	const twits = await twitService.getOne(Number(req.params.id));
	res.status(200).json(twits);
});

router.post('/', async (req: Request, res: Response) => {
	const validation = await twitSchema.safeParse(req.body);

	if (!validation.success) {
		return res.status(400).json({ message: validation.error.message });
	}

	const twits = await twitService.create(req.body);
	res.status(201).json(twits);
});

router.put('/:id', async (req: Request, res: Response) => {
	const twits = await twitService.update(Number(req.params.id), req.body);
	res.status(200).json(twits);
});

router.delete('/:id', async (req: Request, res: Response) => {
	const twits = await twitService.delete(Number(req.params.id));
	res.status(200).json(twits);
});

export const twitRouter = router;
