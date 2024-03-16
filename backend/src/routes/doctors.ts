import { Router } from 'express'
import { DoctorsController } from '../controllers/Doctors.controller'

const router: Router = Router()
const controller: DoctorsController = new DoctorsController()

router.route('/register')
  .post(controller.register)

export default router
