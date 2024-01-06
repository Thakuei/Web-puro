-- CreateTable
CREATE TABLE "Board" (
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "acountId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Board_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Board" ADD CONSTRAINT "Board_acountId_fkey" FOREIGN KEY ("acountId") REFERENCES "Signin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
