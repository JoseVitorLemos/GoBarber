const express = require('express')
const multerConfig = require('./config/multer')
const upload = require('multer')(multerConfig)

const routes = express.Router()

const authMiddleware = require('./app/middlewares/auth')
const guestMiddleware = require('./app/middlewares/guest')

const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController') //Controller autenticação de usuário

routes.get('/', guestMiddleware, SessionController.create) // Login
routes.post('/signin', SessionController.store) // Criação de usuário

routes.get('/signup', guestMiddleware, UserController.create) // Cadastro
routes.post('/signup', upload.single('avatar'), UserController.store) // Cadastro Imagem

routes.use('/app', authMiddleware)

routes.get('/app/dashboard', (req, res) => {
  console.log(req.session.user)
  return res.render('dashboard')
})

module.exports = routes
