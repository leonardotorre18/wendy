import { type Request, type Response } from 'express'
import { createPatient } from '../models/orm/PatientsORM'
import { type IPatient } from '../models/interfaces/IPatient'

export class PatientsController {
  public register = (req: Request, res: Response): void => {
    const { name, email, password, age } = req.body
    createPatient({
      name,
      email: email.toString().toLocaleUpperCase(),
      password,
      age
    })
      .then((doctor: IPatient) => {
        res.status(201).json({
          doctor
        })
      })
      .catch(() => {
        res.status(401).json({
          err: 'Error'
        })
      })
  }
}
