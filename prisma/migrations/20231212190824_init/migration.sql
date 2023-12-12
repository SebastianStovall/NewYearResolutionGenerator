-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Resolution" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "prompt" TEXT NOT NULL,
    "image" TEXT
);
INSERT INTO "new_Resolution" ("id", "image", "prompt") SELECT "id", "image", "prompt" FROM "Resolution";
DROP TABLE "Resolution";
ALTER TABLE "new_Resolution" RENAME TO "Resolution";
CREATE UNIQUE INDEX "Resolution_prompt_key" ON "Resolution"("prompt");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
