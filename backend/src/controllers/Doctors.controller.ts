import { type Request, type Response } from 'express'
import { createDoctor } from '../models/orm/DoctorsORM'
import { type IDoctor } from '../models/interfaces/IDoctor'

export class DoctorsController {
  public register = (req: Request, res: Response): void => {
    const { name, email, password } = req.body
    createDoctor({
      name,
      email,
      password,
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
  }
}
