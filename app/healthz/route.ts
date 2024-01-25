import { HTTP_MESSAGES } from '@/constants/message';
import { dbClient } from '@/libs/db-client';

export async function GET() {
  try {
    // Test database
    await dbClient.leagues.findFirst();

    const message = HTTP_MESSAGES[200];
    return Response.json({ message }, { status: 200, statusText: message });
  } catch (err) {
    console.error(err);
    const message = HTTP_MESSAGES[500];
    return Response.json({ message }, { status: 500, statusText: message });
  }
}
