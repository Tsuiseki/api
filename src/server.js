import mongoose from 'mongoose'
import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes'

// mongoose
mongoose.connect(process.env.MONGO_URL)

// setup express instance
const app = express()
const port = process.env.PORT

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/', routes)

app.listen(port)
