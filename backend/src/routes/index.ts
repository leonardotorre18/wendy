import express, { type Express } from 'express'
import DoctorsRoutes from './doctors'

const routes: Express = express()

routes.use('/doctors', DoctorsRoutes)

export default routes
