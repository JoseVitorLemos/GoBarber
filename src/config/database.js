module.exports = {
  dialect: 'postgres',
  host: '127.0.0.1',
  username: 'docker',
  password: 'docker',
  database: 'gobarber',
  operatorAliases: false,
  define: {
    timestamps: true, //Esse método cria duas colunas, chamadas createdAt e updatedAt. Data de criação e data da ultima modificação.
    underscored: true, //Snake_case em nomes dos campos
    underscoredAll: true //Fazer snake_case nos nomes das tabelas também
  },
}
