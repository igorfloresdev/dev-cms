import { Request, Response } from 'express'

class AboutMeController {
  static async create(req: Request, res: Response) {
    res.status(200).send('About Me')
  }
  static async read(req: Request, res: Response) {
    res.status(200).send('About Me')
  }

  static async update(req: Request, res: Response) {
    res.status(200).send('About Me')
  }

  static async delete(req: Request, res: Response) {
    res.status(200).send('About Me')
  }
}

export default AboutMeController
