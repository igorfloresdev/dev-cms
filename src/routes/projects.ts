import express from 'express'
import ProjectsController from '../controllers/ProjectsController'

const router = express.Router()

router.post('/projects', ProjectsController.create)
router.get('/projects', ProjectsController.create)
router.put('/projects', ProjectsController.update)
router.delete('/projects', ProjectsController.delete)

export default router
