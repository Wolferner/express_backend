import * as express from 'express';
import { Express } from 'express';
import { PORT } from './config/consts';
import { twitRouter } from './src/twit/twit.controller';

const app: Express = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Регистрируем роутер, по url /todos мы будем работать с роутером todoRouter
app.use('api/twits', twitRouter);

//Function for starting server
function startServer() {
	app.listen(PORT, () => {
		console.log(`[server]: Server is running on port ${PORT}`);
	});
}

startServer();
