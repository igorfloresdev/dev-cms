-- CreateTable
CREATE TABLE "Parameters" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "homeTitle" VARCHAR(255),
    "homeSubtitle" VARCHAR(255),
    "homeImageUrl" VARCHAR(255),
    "aboutMeText" TEXT,

    CONSTRAINT "Parameters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skills" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(255),
    "imageUrl" VARCHAR(255) NOT NULL,

    CONSTRAINT "Skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Projects" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "projectUrl" VARCHAR(255),
    "repoFrontEndUrl" VARCHAR(255),
    "repoBackEndUrl" VARCHAR(255),
    "repoMobileUrl" VARCHAR(255),
    "imageUrl" VARCHAR(255),

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tecnologies" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Tecnologies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectsTecnologies" (
    "projectId" TEXT NOT NULL,
    "tecnologyId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProjectsTecnologies_pkey" PRIMARY KEY ("projectId","tecnologyId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Skills_name_key" ON "Skills"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Projects_title_key" ON "Projects"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Tecnologies_name_key" ON "Tecnologies"("name");

-- AddForeignKey
ALTER TABLE "ProjectsTecnologies" ADD CONSTRAINT "ProjectsTecnologies_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectsTecnologies" ADD CONSTRAINT "ProjectsTecnologies_tecnologyId_fkey" FOREIGN KEY ("tecnologyId") REFERENCES "Tecnologies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
