/*
  Warnings:

  - Added the required column `desc` to the `Shoe` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Shoe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "merk" TEXT NOT NULL,
    "qty" INTEGER NOT NULL,
    "available" BOOLEAN NOT NULL,
    "desc" TEXT NOT NULL
);
INSERT INTO "new_Shoe" ("available", "createdAt", "id", "merk", "name", "qty", "updatedAt") SELECT "available", "createdAt", "id", "merk", "name", "qty", "updatedAt" FROM "Shoe";
DROP TABLE "Shoe";
ALTER TABLE "new_Shoe" RENAME TO "Shoe";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
