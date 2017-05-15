/* globals Promise */

import mongoose from 'mongoose'
import express from 'express'
import bodyParser from 'body-parser'
import { MONGO_URL, PORT } from './config'
import routes from './routes'

// mongoose
mongoose.Promise = Promise
mongoose.connect(MONGO_URL)

// setup express instance
const app = express()
const port = PORT

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/', routes)

app.listen(port)
