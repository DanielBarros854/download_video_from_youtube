import express, { Request, Response, Router } from 'express'
import { downloadVideo, home } from './routes'

const app = express()

app.set("view engine", "ejs");
app.use(express.json())

app.use('/', home)
app.use('/download', downloadVideo)

app.listen(3333, () => console.log('Server running on URL: http://localhost:3333'))
