/*
  Warnings:

  - The primary key for the `Signin` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Signin` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `acountId` on the `Board` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Board" DROP CONSTRAINT "Board_acountId_fkey";

-- AlterTable
ALTER TABLE "Board" DROP COLUMN "acountId",
ADD COLUMN     "acountId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Signin" DROP CONSTRAINT "Signin_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Signin_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Board" ADD CONSTRAINT "Board_acountId_fkey" FOREIGN KEY ("acountId") REFERENCES "Signin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
