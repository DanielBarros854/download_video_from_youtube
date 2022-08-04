import express, { Router } from 'express'
import { downloadVideo, home } from './routes'

const app = express()

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);
app.use(express.json())

app.use('', home)
app.use('/download', downloadVideo)

app.listen(process.env.PORT || 3333, () => console.log('Server running on URL: http://localhost:3333'));
