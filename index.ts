import express, { type Express } from 'express';
import { PORT } from './config/consts';
import { twitRouter } from './src/twit/twit.controller';

const app: Express = express();
const port = PORT ?? 3000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Решистрируем роутер, по url /todos мы будем работать с роутером todoRouter
app.use('api/twits', twitRouter);

//Function for starting server
function startServer() {
	app.listen(port, () => {
		console.log(`[server]: Server is running on port ${port}`);
	});
}

startServer();
