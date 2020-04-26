module.exports = (req, res, next) => {
  if (req.session && req.session.user) {
    res.locals.user = req.session.user //Defini uma variavel para as viws acessar essa informação

    return next()
  }

  return res.redirect('/')
}
