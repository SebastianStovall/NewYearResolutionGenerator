-- CreateTable
CREATE TABLE "Resolution" (
    "id" SERIAL NOT NULL,
    "prompt" TEXT NOT NULL,
    "image" TEXT,

    CONSTRAINT "Resolution_pkey" PRIMARY KEY ("id")
);
