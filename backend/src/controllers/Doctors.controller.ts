import { type Request, type Response } from 'express'
import { createDoctor } from '../models/orm/DoctorsORM'
import { type IDoctor } from '../models/interfaces/IDoctor'
import { hashSync } from 'bcryptjs'
import { type IPatient } from '../models/interfaces/IPatient'

export class DoctorsController {
  public register = (req: Request, res: Response): void => {
    const { name, email, age, password }: IPatient = req.body

    if (password !== undefined && password.length >= 8) {
      createDoctor({
        name,
        email: email.toString().toLocaleUpperCase(),
        password: hashSync(password),
        age,
        specialties: [],
        availability: []
      })
        .then((doctor: IDoctor) => {
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
