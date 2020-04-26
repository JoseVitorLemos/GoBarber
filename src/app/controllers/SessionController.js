const { User } = require('../models')

class SessionController {
  async create(req, res) {
    return res.render('auth/signin')
  }

  async store(req, res) {
    const { email, password } = req.body //Buscou no body o email e a senha do usuário

    const user = await User.findOne({ where: { email } }) //Realizou uma query no banco de dados para retornar um registro

    if (!user) {
      console.log('Usuário não encontrado')
      return res.redirect('/')
    }

    if (!(await user.checkPassWord(password))) {
      console.log('Senha incorreta')
      return res.redirect('/')
    }

    req.session.user = user

    return res.redirect('/app/dashboard')
  }
  destroy(req, res) {
    req.session.destroy(() => {
      res.clearCookie('root')
      return res.redirect('/')
    })
  }
}

module.exports = new SessionController()
