import bcryptjs from 'bcryptjs';

import { HTTP_MESSAGES } from '@/constants/message';
import { dbClient } from '@/libs/db-client';
import { signToken } from '@/libs/token';

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    // 1. Check database
    const player = await dbClient.players.findUnique({
      where: {
        username
      }
    });

    if (!player) {
      const message = 'Invalid username or password';
      return Response.json({ message }, { status: 404, statusText: message });
    }

    // 2. Check password
    const passwordIsValid = bcryptjs.compareSync(password, player.password);

    if (!passwordIsValid) {
      const message = 'Invalid username or password';
      return Response.json({ message }, { status: 404, statusText: message });
    }

    // 3. Sign Token
    const token = signToken({ id: player.id });

    const data = {
      player,
      token
    };

    return Response.json(
      { data },
      { status: 200, statusText: HTTP_MESSAGES[200] }
    );
  } catch (err) {
    console.error(JSON.stringify(err));

    const message = HTTP_MESSAGES[500];
    return Response.json({ message }, { status: 500, statusText: message });
  }
}
