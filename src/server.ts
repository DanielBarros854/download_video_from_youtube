import express, { Request, Response, Router } from 'express'
import { downloadVideo, home } from './routes'

const app = express()

app.use(express.json())

app.use('/', home)
app.use('/download_video', downloadVideo)

app.listen(3333, () => console.log('Server running on URL: https://localhost:3333'))
