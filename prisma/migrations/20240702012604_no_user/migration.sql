/*
  Warnings:

  - You are about to drop the column `userId` on the `Art` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Art" DROP CONSTRAINT "Art_userId_fkey";

-- AlterTable
ALTER TABLE "Art" DROP COLUMN "userId";
