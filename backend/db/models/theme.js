'use strict';
module.exports = (sequelize, DataTypes) => {
  const Theme = sequelize.define('Theme', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: [1, 50],
      },
    },
    light: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    comment: {
      allowNull: true,
      type: DataTypes.STRING,
      validate: {
        len: [1, 1000],
      },
    },
    likes: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, {});
  Theme.associate = function(models) {
    // associations can be defined here
    const columnMapping = {
      through: 'Favorite',
      otherKey: 'user_id',
      foreignKey: 'theme_id'
    };

    // Theme.belongsTo(models.User, { foreignKey: 'user_id' });
    Theme.belongsToMany(models.User, columnMapping);
    Theme.hasMany(models.Theme_Attribute, { foreignKey: 'theme_id' });
  };
  return Theme;
};