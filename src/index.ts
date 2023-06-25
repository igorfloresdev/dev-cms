import dotenv from 'dotenv'
import express from 'express'
import routes from './routes'
import errorHandler from './middlewares/errorHandler'

dotenv.config({
  path: process.env.NODE_ENV === 'development' ? '.env.development' : '.env',
})

const port = process.env.PORT

const app = express()

routes(app)

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Now listening on ${port}`)
})
