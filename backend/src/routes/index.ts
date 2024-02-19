import { Router } from 'express'
import { HelloWorldController } from '../controllers/HelloWorld.controller'

const router: Router = Router()

const { sayHello } = new HelloWorldController()

router.use('/', sayHello)

export default router
