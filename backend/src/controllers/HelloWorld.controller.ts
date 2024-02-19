import {
  type Request,
  type Response
} from 'express'

export class HelloWorldController {
  public sayHello = (req: Request, res: Response): void => {
    res.status(200).json({
      message: 'Hello World!'
    })
  }
}
