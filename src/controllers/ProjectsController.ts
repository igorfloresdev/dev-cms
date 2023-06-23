import { Request, Response } from 'express'

class ProjectsController {
  static async create(req: Request, res: Response) {
    res.status(200).send('Projects created')
  }

  static async read(req: Request, res: Response) {
    res.status(200).send('Projects read')
  }

  static async update(req: Request, res: Response) {
    res.status(200).send('Projects read')
  }

  static async delete(req: Request, res: Response) {
    res.status(200).send('Projects deleted')
  }
}

export default ProjectsController
