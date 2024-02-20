import express, {
  type Express
} from 'express'
import router from '../routes'
import morgan from 'morgan'

const server: Express = express()

server.use(morgan('dev'))

server.use('/', router)

export default server
