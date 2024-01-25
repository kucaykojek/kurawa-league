import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  return new PrismaClient();
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  dbClient: PrismaClientSingleton | undefined;
};

export const dbClient = globalForPrisma.dbClient ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.dbClient = dbClient;
}
