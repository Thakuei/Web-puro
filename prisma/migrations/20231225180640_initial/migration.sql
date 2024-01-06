/*
  Warnings:

  - You are about to drop the column `mail` on the `profile` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `profile` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `profile` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "profile_mail_key";

-- DropIndex
DROP INDEX "profile_name_key";

-- AlterTable
ALTER TABLE "profile" DROP COLUMN "mail",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "profile_email_key" ON "profile"("email");
