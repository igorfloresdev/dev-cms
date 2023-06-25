import express from 'express'
import HomeController from '../controllers/HomeController'

const router = express.Router()

router.get('/home', HomeController.read)
router.put('/home', HomeController.update)

export default router
