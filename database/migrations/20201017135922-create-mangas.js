'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('mangas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      thumb: {
        type: Sequelize.TEXT
      },
      type: {
        type: Sequelize.STRING
      },
      endpoint: {
        type: Sequelize.STRING,
        unique: true
      },
      last_chapter: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: null
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('mangas');
  }
};