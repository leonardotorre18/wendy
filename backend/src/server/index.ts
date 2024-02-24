import express, {
  type Express
} from 'express'
import router from '../routes'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
import '../database/index'
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerOptions from '../swagger/config'

dotenv.config()

const server: Express = express()

server.use(cors())
// server.use(express.urlencoded())
server.use(express.json())
server.use(morgan('dev'))

server.use('/docs',
  swaggerUi.serve,
  swaggerUi.setup(
    swaggerJSDoc(swaggerOptions)
  )
)

server.use('/', router)

export default server
