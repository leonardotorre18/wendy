import express, {
  type Express
} from 'express'
import router from '../routes'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
import '../database/index'
dotenv.config()
const server: Express = express()

server.use(cors())
server.use(express.json())
server.use(morgan('dev'))

server.use('/', router)

export default server
