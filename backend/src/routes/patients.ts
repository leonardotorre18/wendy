import { Router } from 'express'
import { PatientsController } from '../controllers/Patients.controller'

const router: Router = Router()
const controller: PatientsController = new PatientsController()

router.route('/register')
  .post(controller.register)

export default router
