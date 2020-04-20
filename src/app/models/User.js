module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar: DataTypes.STRING, //Irá armazenar o caminho relativo da imagem
    password_hash: DataTypes.STRING, //Irá criptografar a senha antes de armazenar
    provider: DataTypes.BOOLEAN, //irá armazenar uma informação sobre o tipo de usuário
  })

  return User
}

//sequelize: É a instancia do sequelize que irá fazer a conexão com o banco de dados
//DataTypes: É o tipo de colunas que será usado
