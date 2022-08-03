import { Request, Response, Router } from "express"

export const home = Router()

home.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Server is running' })
})
