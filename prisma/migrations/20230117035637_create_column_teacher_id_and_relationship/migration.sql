/*
  Warnings:

  - A unique constraint covering the columns `[teachers_id]` on the table `courses` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `teachers_id` to the `courses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "courses" ADD COLUMN     "teachers_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Teachers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Teachers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Teachers_name_key" ON "Teachers"("name");

-- CreateIndex
CREATE UNIQUE INDEX "courses_teachers_id_key" ON "courses"("teachers_id");

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_teachers_id_fkey" FOREIGN KEY ("teachers_id") REFERENCES "Teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
