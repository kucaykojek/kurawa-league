import { Prisma } from '@prisma/client';
import bcryptjs from 'bcryptjs';
import { omit } from 'lodash';
import { ZodError, z } from 'zod';

import { ERROR_MESSAGES, HTTP_MESSAGES } from '@/constants/message';
import { dbClient } from '@/libs/db-client';

export async function POST(req: Request) {
  try {
    // 1. Validation
    const payload = await req.json();
    const registerSchema = z.object({
      name: z.string().min(3).max(50),
      username: z
        .string()
        .min(3)
        .max(20)
        .regex(/^[a-z0-9]+$/),
      password: z.string().min(3).max(20)
    });
    registerSchema.parse(payload);

    // 2. Saving to database
    const player = await dbClient.players.create({
      data: {
        name: payload.name,
        username: payload.username,
        password: bcryptjs.hashSync(payload.password, 8)
      }
    });

    const data = omit(player, ['password']);

    return Response.json(
      { data },
      { status: 200, statusText: HTTP_MESSAGES[200] }
    );
  } catch (err) {
    console.error(JSON.stringify(err));

    let status = 500;

    // Error by validation
    if (err instanceof ZodError) {
      status = 400;
      return Response.json(
        { message: HTTP_MESSAGES[status], error: err.format() },
        { status, statusText: HTTP_MESSAGES[status] }
      );
    }

    // Error by prisma
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      status = 400;
      const message =
        err.code === 'P2002'
          ? ERROR_MESSAGES.username_already_exist
          : HTTP_MESSAGES[status];
      return Response.json(
        {
          message,
          error: err
        },
        { status, statusText: message }
      );
    }

    return Response.json(
      { message: HTTP_MESSAGES[status] },
      { status, statusText: HTTP_MESSAGES[status] }
    );
  }
}
