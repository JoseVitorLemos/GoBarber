const express = require('express')
const multerConfig = require('./config/multer')
const upload = require('multer')(multerConfig)

const routes = express.Router()

const authMiddleware = require('./app/middlewares/auth')
const guestMiddleware = require('./app/middlewares/guest')

const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController') //Controller autenticação de usuário
const DashboardController = require('./app/controllers/DashboardController')
const FileController = require('./app/controllers/FileController')

routes.use((req, res, next) => {
  res.locals.flashSuccess = req.flash('success')
  res.locals.flashError = req.flash('error')

  return next()
}) //Cria uma variavel de ambiente para que todas as views do nunjuks recebam as mensagens

routes.get('/files/:file', FileController.show)

routes.get('/', guestMiddleware, SessionController.create) // Login
routes.post('/signin', SessionController.store) // Criação de usuário

routes.get('/signup', guestMiddleware, UserController.create) // Cadastro
routes.post('/signup', upload.single('avatar'), UserController.store) // Cadastro Imagem

routes.use('/app', authMiddleware)

routes.get('/app/logout', SessionController.destroy)

routes.get('/app/dashboard', DashboardController.index)

module.exports = routes
