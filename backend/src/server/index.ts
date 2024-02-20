import express, {
  type Express
} from 'express'
import router from '../routes'
import morgan from 'morgan'
import cors from 'cors'

const server: Express = express()

server.use(cors)
server.use(express.json())
server.use(morgan('dev'))

server.use('/', router)

export default server
