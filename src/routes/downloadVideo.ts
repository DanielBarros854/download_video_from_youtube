import { Request, Response, Router } from "express";
import { join } from "path";
import { getInfo } from "ytdl-core";

export const downloadVideo = Router();

downloadVideo.get('', async (req: Request, res: Response) => {
  const video_url = req!.query!.url as string
  const video_id_formatted = video_url.split('v=')[1]

  const video_info = await getInfo(video_url)
  const formats_formatted = video_info.formats
    .sort((a, b) => a.mimeType! < b.mimeType! ? 1 : 0)

  res.render(join(__dirname, '../views/download.ejs'), {
    url: `https://www.youtube.com/embed/${video_id_formatted}`,
    info: formats_formatted
  })
})
