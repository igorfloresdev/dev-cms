import express, { Application, Request, Response } from 'express'

const routes = (app: Application) => {
  app.route('/').get((req: Request, res: Response) => {
    res.status(200).send('Hello World!')
  })

  app.use(express.json())
}

export default routes
