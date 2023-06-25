import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function seedData() {
  // Parameters

  const data = {
    homeTitle: 'Home Title',
    homeSubtitle: 'Home Subtitle',
    homeImageUrl: '',
    aboutMeText: 'Tell me more about yourself :)',
  }

  const existingParameters = await prisma.parameters.findFirst()

  if (existingParameters) {
    await prisma.parameters.updateMany({
      where: {
        id: existingParameters.id,
      },
      data: data,
    })

    console.log('Parameters updated !')
    return
  }
  await prisma.parameters.create({
    data: data,
  })

  console.log('Parameters created !')
}

seedData()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
