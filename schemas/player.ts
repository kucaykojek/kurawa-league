import { z } from 'zod';

export const playerSchema = z.object({
  id: z.string(),
  username: z.string(),
  name: z.string(),
  created_at: z.string()
});

export type Player = z.infer<typeof playerSchema>;
