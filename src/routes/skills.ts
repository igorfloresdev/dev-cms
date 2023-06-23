import express from 'express'
import SkillsController from '../controllers/SkillsController'

const router = express.Router()

router.post('/skills', SkillsController.create)
router.get('/skills', SkillsController.create)
router.put('/skills', SkillsController.update)
router.delete('/skills', SkillsController.delete)

export default router
