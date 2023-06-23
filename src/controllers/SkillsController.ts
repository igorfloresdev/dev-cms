import { Request, Response } from 'express'

class SkillsController {
  static async create(req: Request, res: Response) {
    res.status(200).send('Skills created successfully')
  }

  static async read(req: Request, res: Response) {
    res.status(200).send('Skills read successfully')
  }

  static async update(req: Request, res: Response) {
    res.status(200).send('Skills updated successfully')
  }

  static async delete(req: Request, res: Response) {
    res.status(200).send('Skills deleted successfully')
  }
}

export default SkillsController
