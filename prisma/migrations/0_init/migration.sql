-- CreateTable
CREATE TABLE "crew" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(255) NOT NULL,

    CONSTRAINT "crew_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "duty" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "crewmate_id" INTEGER NOT NULL,

    CONSTRAINT "duty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "monster" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "is_skinwalker" BOOLEAN,

    CONSTRAINT "monster_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "crew_username_key" ON "crew"("username");

-- CreateIndex
CREATE UNIQUE INDEX "duty_crewmate_id_key" ON "duty"("crewmate_id");

-- AddForeignKey
ALTER TABLE "duty" ADD CONSTRAINT "duty_crewmate_id_fkey" FOREIGN KEY ("crewmate_id") REFERENCES "crew"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

