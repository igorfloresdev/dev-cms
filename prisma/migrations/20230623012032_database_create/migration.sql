-- CreateTable
CREATE TABLE "Home" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255),
    "subtitle" VARCHAR(255),
    "image_url" VARCHAR(255),

    CONSTRAINT "Home_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "About_Me" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "text" TEXT,

    CONSTRAINT "About_Me_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skills" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(255),
    "image_url" VARCHAR(255) NOT NULL,

    CONSTRAINT "Skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Projects" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "project_url" VARCHAR(255),
    "repo_frontend_url" VARCHAR(255),
    "repo_backend_url" VARCHAR(255),
    "repo_mobile_url" VARCHAR(255),
    "image_url" VARCHAR(255),

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tecnologies" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Tecnologies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Projects_Tecnologies" (
    "project_id" TEXT NOT NULL,
    "tecnology_id" TEXT NOT NULL,
    "assigned_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Projects_Tecnologies_pkey" PRIMARY KEY ("project_id","tecnology_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Skills_name_key" ON "Skills"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Projects_title_key" ON "Projects"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Tecnologies_name_key" ON "Tecnologies"("name");

-- AddForeignKey
ALTER TABLE "Projects_Tecnologies" ADD CONSTRAINT "Projects_Tecnologies_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Projects_Tecnologies" ADD CONSTRAINT "Projects_Tecnologies_tecnology_id_fkey" FOREIGN KEY ("tecnology_id") REFERENCES "Tecnologies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
