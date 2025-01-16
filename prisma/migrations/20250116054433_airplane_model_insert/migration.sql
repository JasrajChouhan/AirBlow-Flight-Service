-- CreateTable
CREATE TABLE "Airplane" (
    "id" TEXT NOT NULL,
    "modelNumber" TEXT NOT NULL,
    "capacity" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Airplane_id_key" ON "Airplane"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Airplane_modelNumber_key" ON "Airplane"("modelNumber");

-- CreateIndex
CREATE INDEX "Airplane_modelNumber_idx" ON "Airplane"("modelNumber");
