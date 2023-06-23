import dotenv from 'dotenv'
import express, { Request, Response } from 'express'

dotenv.config({
  path: process.env.NODE_ENV === 'development' ? '.env.development' : '.env',
})

const port = process.env.PORT

const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!')
})

app.listen(port, () => {
  console.log(`Now listening on ${port}`)
})
