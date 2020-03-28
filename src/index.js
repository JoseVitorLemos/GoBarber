const server = require('./server')

server.listen(process.env.PORT || 3000)
//Iniciar port com variavel de ambiente || iniciar na porta 3000