import express from 'express'
import AboutMeController from '../controllers/AboutMeController'

const router = express.Router()

router.post('/aboutme', AboutMeController.create)
router.get('/aboutme', AboutMeController.read)
router.put('/aboutme', AboutMeController.update)
router.delete('/aboutme', AboutMeController.delete)

export default router
