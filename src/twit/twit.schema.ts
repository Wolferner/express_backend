import * as z from 'zod';

export const twitSchema = z.object({
	id: z.string(),
	text: z.string().min(1, 'text is required').max(280),
});
