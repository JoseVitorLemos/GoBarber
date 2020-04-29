'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'user', key: 'id' },
        onUpdate: 'CASCADE', //Se o ID alterar na tabela de usuários será alterado aqui também
        onDelete: 'CASCADE', //Caso um usuário seja removido todos os agendamentos marcados por ele será removido
        allowNull: false,
      },
      provider_id: {
        type: Sequelize.INTEGER,
        references: { model: 'user', key: 'id' },
        onUpdate: 'CASCADE', //Se o ID alterar na tabela de usuários será alterado aqui também
        onDelete: 'CASCADE', //Caso um usuário seja removido todos os agendamentos marcados por ele será removido
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('appointments')
  },
}
