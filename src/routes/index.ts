import { Request, Response, Router } from 'express'
import home from './home'
import aboutMe from './aboutMe'
import projects from './projects'
import skills from './skills'
import tecnologies from './skills'

const routes = (app: Router) => {
  app.route('/').get((req: Request, res: Response) => {
    res.status(200).send('devCMS api')
  })

  app.use(home, aboutMe, projects, skills, tecnologies)
}

export default routes
