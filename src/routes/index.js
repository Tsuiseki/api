import Router from 'express-promise-router'
import restify from 'express-restify-mongoose'
import { models } from '@tsuiseki/common'
import { register as registerShow } from './show'

const router = Router()

registerShow(router)
restify.serve(router, models.ShowSource)

export default router
