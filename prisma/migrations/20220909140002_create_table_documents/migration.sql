-- CreateEnum
CREATE TYPE "document_type" AS ENUM ('RG', 'CNH');

-- CreateTable
CREATE TABLE "documents" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "issue_date" TEXT NOT NULL,
    "expiration_date" TEXT NOT NULL,
    "register_number" TEXT NOT NULL,
    "issuing_body" TEXT NOT NULL,

    CONSTRAINT "documents_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
