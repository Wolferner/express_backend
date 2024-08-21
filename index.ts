import express, { Express } from 'express';
import { PORT } from './config/consts';
import * as todoRouter from './controllers/todo.controller';

const app: Express = express();
const port = PORT ?? 3000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//По url /todos мы будем работать с роутером todoRouter
app.use('/todos', todoRouter.default);

//Function for starting server
function startServer() {
	app.listen(port, () => {
		console.log(`[server]: Server is running on port ${port}`);
	});
}

startServer();
