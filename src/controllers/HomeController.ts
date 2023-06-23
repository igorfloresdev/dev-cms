import { Request, Response } from 'express'

class HomeController {
  static async create(req: Request, res: Response) {
    res.status(200).send('create home')
  }

  static async read(req: Request, res: Response) {
    res.status(200).send('get home')
  }

  static async update(req: Request, res: Response) {
    res.status(200).send('update home')
  }

  static async delete(req: Request, res: Response) {
    res.status(200).send('delete home')
  }
}

export default HomeController
