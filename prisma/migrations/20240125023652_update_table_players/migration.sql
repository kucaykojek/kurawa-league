/*
  Warnings:

  - Added the required column `password` to the `players` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `players` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "players" ADD COLUMN     "password" VARCHAR(255) NOT NULL,
ADD COLUMN     "username" VARCHAR(10) NOT NULL;
