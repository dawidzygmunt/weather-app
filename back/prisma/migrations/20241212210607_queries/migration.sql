-- CreateTable
CREATE TABLE "queries" (
    "id" SERIAL NOT NULL,
    "city_name" TEXT NOT NULL,
    "query_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "temperature" INTEGER NOT NULL,
    "weather_condition" TEXT NOT NULL,
    "recommended_activity" TEXT NOT NULL,

    CONSTRAINT "queries_pkey" PRIMARY KEY ("id")
);
