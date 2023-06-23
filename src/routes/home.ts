import express from 'express'
import HomeController from '../controllers/HomeController'

const router = express.Router()

router.post('/home', HomeController.create)
router.get('/home', HomeController.read)
router.put('/home', HomeController.update)
router.delete('/home', HomeController.delete)

export default router
