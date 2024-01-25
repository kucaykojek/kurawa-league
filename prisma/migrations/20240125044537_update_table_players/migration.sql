/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `players` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "players_username_key" ON "players"("username");
