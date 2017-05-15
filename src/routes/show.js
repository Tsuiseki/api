import fs from 'fs'
import path from 'path'
import multer from 'multer'
import restify from 'express-restify-mongoose'
import { models } from '@tsuiseki/common'
import { STORAGE_PATH, MEDIA_PREFIX } from '../config'

const IMAGE_FOLDER = 'show-images'

const storage = multer.diskStorage({
  destination: path.join(STORAGE_PATH, IMAGE_FOLDER),
  filename: (req, file, cb) => {
    const fileParts = file.originalname.split('.')
    const fileExtension = fileParts[fileParts.length - 1]
    const showId = req.params.id
    cb(null, `${showId}.${fileExtension}`)
  },
})

const upload = multer({ storage })

const handleImageUpload = async function(req, res) {
  const file = req.file
  const showId = req.params.id
  const show = await models.Show.findById(showId).exec()

  if (show != null) {
    show.image = path.join(MEDIA_PREFIX, IMAGE_FOLDER, file.filename)
    await show.save()
    res.sendStatus(200)
  } else {
    fs.unlinkSync(file.path)
    res.sendStatus(404)
  }
}

export const register = (router) => {
  restify.serve(router, models.Show)

  // image upload
  router.post('/api/v1/show/:id/image', upload.single('file'), handleImageUpload)
}

