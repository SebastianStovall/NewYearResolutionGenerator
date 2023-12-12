-- CreateTable
CREATE TABLE "Resolution" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "prompt" TEXT NOT NULL,
    "image" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Resolution_prompt_key" ON "Resolution"("prompt");
