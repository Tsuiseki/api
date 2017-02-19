import express from 'express'
import restify from 'express-restify-mongoose'
import { models } from '@tsuiseki/common'

const router = express.Router()

restify.serve(router, models.Show)
restify.serve(router, models.ShowSource)

export default router
