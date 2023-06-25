import { PrismaClient } from '@prisma/client'
import { NextFunction, Request, Response } from 'express'

const prisma = new PrismaClient()
const home = prisma.parameters
class HomeController {
  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { title, subtitle, imageUrl } = req.body

      const result = await home.findFirst({
        select: {
          id: true,
        },
      })

      await home.update({
        where: { id: result?.id },
        data: { homeTitle: title, homeSubtitle: subtitle, homeImageUrl: imageUrl },
      })

      res.status(200).json({ message: 'Home section updated successfully' })
    } catch (error) {
      next(error)
    }
  }

  static async read(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await home.findFirst()
      res.status(200).json(result)
    } catch (error) {
      next(error)
    }
  }
}

export default HomeController
