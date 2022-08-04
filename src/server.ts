import express from 'express'
import { join } from 'path';
import { downloadVideo, home } from './routes'

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.json())

app.use('', home)
app.use('/download', downloadVideo)

app.listen(process.env.PORT || 3333, () => console.log('Server running on URL: http://localhost:3333'));
