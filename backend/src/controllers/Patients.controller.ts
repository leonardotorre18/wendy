import { type Request, type Response } from 'express'
import { createPatient } from '../models/orm/PatientsORM'
import { type IPatient } from '../models/interfaces/IPatient'
import { type IDoctor } from '../models/interfaces/IDoctor'
import { hashSync } from 'bcryptjs'

export class PatientsController {
  public register = (req: Request, res: Response): void => {
    const { name, email, password, age }: IDoctor = req.body

    if (password !== undefined && password.length >= 8) {
      createPatient({
        name,
        email: email.toString().toLocaleUpperCase(),
        password: hashSync(password),
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
    } else {
      res.status(401).json({
        err: 'Error'
      })
    }
  }
}
