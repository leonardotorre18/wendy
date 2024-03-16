import express, { type Express } from 'express'
import DoctorsRoutes from './doctors'
import PatientsRoutes from './patients'

const routes: Express = express()

routes.use('/doctors', DoctorsRoutes)
routes.use('/patients', PatientsRoutes)

export default routes
