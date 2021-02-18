'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Themes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      // light: {
      //   allowNull: false,
      //   type: Sequelize.BOOLEAN
      // },
      commentColor: {
        allowNull: false,
        type: Sequelize.STRING(25),
      },
      funcKeywordColor: {
        allowNull: false,
        type: Sequelize.STRING(25),
      },
      funcNameColor: {
        allowNull: false,
        type: Sequelize.STRING(25),
      },
      roundBraceColor: {
        allowNull: false,
        type: Sequelize.STRING(25),
      },
      parameterColor: {
        allowNull: false,
        type: Sequelize.STRING(25),
      },
      curlyBraceColor: {
        allowNull: false,
        type: Sequelize.STRING(25),
      },
      letConstColor: {
        allowNull: false,
        type: Sequelize.STRING(25),
      },
      variableColor: {
        allowNull: false,
        type: Sequelize.STRING(25),
      },
      operatorColor: {
        allowNull: false,
        type: Sequelize.STRING(25),
      },
      numberColor: {
        allowNull: false,
        type: Sequelize.STRING(25),
      },
      punctuationColor: {
        allowNull: false,
        type: Sequelize.STRING(25),
      },
      fatArrowColor: {
        allowNull: false,
        type: Sequelize.STRING(25),
      },
      methodColor: {
        allowNull: false,
        type: Sequelize.STRING(25),
      },
      stringColor: {
        allowNull: false,
        type: Sequelize.STRING(25),
      },
      comment: {
        allowNull: true,
        type: Sequelize.STRING(1000),
      },
      likes: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Users' },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Themes');
  
  }
};