-- CreateTable
CREATE TABLE "Township" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "region" TEXT,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Township_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AidType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AidType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FieldWorker" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FieldWorker_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Distribution" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "townshipId" INTEGER NOT NULL,
    "aidTypeId" INTEGER NOT NULL,
    "fieldWorkerId" INTEGER NOT NULL,

    CONSTRAINT "Distribution_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Township_name_key" ON "Township"("name");

-- CreateIndex
CREATE INDEX "Township_name_idx" ON "Township"("name");

-- CreateIndex
CREATE UNIQUE INDEX "AidType_name_key" ON "AidType"("name");

-- CreateIndex
CREATE INDEX "AidType_name_idx" ON "AidType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "FieldWorker_email_key" ON "FieldWorker"("email");

-- CreateIndex
CREATE INDEX "FieldWorker_email_idx" ON "FieldWorker"("email");

-- CreateIndex
CREATE INDEX "Distribution_date_idx" ON "Distribution"("date");

-- CreateIndex
CREATE INDEX "Distribution_townshipId_idx" ON "Distribution"("townshipId");

-- CreateIndex
CREATE INDEX "Distribution_aidTypeId_idx" ON "Distribution"("aidTypeId");

-- AddForeignKey
ALTER TABLE "Distribution" ADD CONSTRAINT "Distribution_townshipId_fkey" FOREIGN KEY ("townshipId") REFERENCES "Township"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Distribution" ADD CONSTRAINT "Distribution_aidTypeId_fkey" FOREIGN KEY ("aidTypeId") REFERENCES "AidType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Distribution" ADD CONSTRAINT "Distribution_fieldWorkerId_fkey" FOREIGN KEY ("fieldWorkerId") REFERENCES "FieldWorker"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
