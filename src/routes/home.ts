import { Request, Response, Router } from "express"
import { join } from "path"

export const home = Router()

home.get('/', (req: Request, res: Response) => {
  res.render(join(__dirname, '../views/home.ejs'))
})
