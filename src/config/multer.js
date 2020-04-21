const path = require('path')
const crypto = require('crypto')
const multer = require('multer')

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'temp', 'uploads'),
    filename: (req, file, callback) => {
      crypto.randomBytes(16, (err, raw) => {
        if (err) return callback(err)

        callback(null, raw.toString('hex') + path.extname(file.originalname))
      })
    },
  }),
}
