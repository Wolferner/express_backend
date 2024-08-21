import { Router, type Request, type Response } from 'express';
import { TodoService } from '../services/todo.service';

//Controllers need only for handling requests and responses + validation
//All logic should be in services
const router = Router();

router.get('/', async (req: Request, res: Response) => {
	const todos = await TodoService.getAll();
	res.json(todos);
});

router.get('/:id', async (req: Request, res: Response) => {
	const todos = await TodoService.getOne(Number(req.params.id));
	res.json(todos);
});

router.post('/', async (req: Request, res: Response) => {
	const todos = await TodoService.create(req.body);
	res.json(todos);
});

router.put('/:id', async (req: Request, res: Response) => {
	const todos = await TodoService.update(Number(req.params.id), req.body);
	res.json(todos);
});

router.delete('/:id', async (req: Request, res: Response) => {
	const todos = await TodoService.delete(Number(req.params.id));
	res.json(todos);
});

export default router;
