import { Request, Response, Router } from "express";

export const downloadVideo = Router();

downloadVideo.get('/', (req: Request, res: Response) => {
  res.json({ message: 'download' })
})
