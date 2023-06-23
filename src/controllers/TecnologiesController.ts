import { Request, Response } from 'express'

class TecnologiesController {
  static async create(req: Request, res: Response) {
    res.status(200).send('Tecnology created successfully')
  }

  static async read(req: Request, res: Response) {
    res.status(200).send('Tecnology read successfully')
  }

  static async update(req: Request, res: Response) {
    res.status(200).send('Tecnology update successfully')
  }

  static async delete(req: Request, res: Response) {
    res.status(200).send('Tecnology deleted successfully')
  }
}

export default TecnologiesController
