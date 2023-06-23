import express from 'express'
import TecnologiesController from '../controllers/TecnologiesController'

const router = express.Router()

router.post('/tecnologies', TecnologiesController.create)
router.get('/tecnologies', TecnologiesController.create)
router.put('/tecnologies', TecnologiesController.update)
router.delete('/tecnologies', TecnologiesController.delete)

export default router
