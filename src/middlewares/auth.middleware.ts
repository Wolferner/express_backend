import type { NextFunction, Request, Response } from 'express';

export const authMiddleware = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const authHeader = req.headers.authorization;
	if (!authHeader) {
		return res.status(401).send('No authorization header');
	}
	next();
};
