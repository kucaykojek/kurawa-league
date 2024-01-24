/*
  Warnings:

  - You are about to drop the column `updated_at` on the `games` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `round_scores` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `rounds` table. All the data in the column will be lost.
  - Added the required column `loser_player_id` to the `rounds` table without a default value. This is not possible if the table is not empty.
  - Added the required column `winner_player_id` to the `rounds` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "games" DROP COLUMN "updated_at";

-- AlterTable
ALTER TABLE "round_scores" DROP COLUMN "updated_at";

-- AlterTable
ALTER TABLE "rounds" DROP COLUMN "updated_at",
ADD COLUMN     "loser_player_id" TEXT NOT NULL,
ADD COLUMN     "winner_player_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "rounds" ADD CONSTRAINT "rounds_winner_player_id_fkey" FOREIGN KEY ("winner_player_id") REFERENCES "players"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rounds" ADD CONSTRAINT "rounds_loser_player_id_fkey" FOREIGN KEY ("loser_player_id") REFERENCES "players"("id") ON DELETE CASCADE ON UPDATE CASCADE;
