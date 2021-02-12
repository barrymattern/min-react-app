'use strict';
module.exports = (sequelize, DataTypes) => {
  const Theme_Attribute = sequelize.define('Theme_Attribute', {
    theme_id: {
      allowNull:false,
      type: DataTypes.INTEGER,
    },
    property: {
      allowNull:false,
      type: DataTypes.STRING,
      validate: {
        len: [1, 500],
      },
    },
    value: {
      allowNull:false,
      type: DataTypes.STRING,
      validate: {
        len:[1, 50],
      },
    },
  }, {});
  Theme_Attribute.associate = function(models) {
    // associations can be defined here
    Theme_Attribute.belongsTo(models.Theme, { foreignKey: 'theme_id' });
  };
  return Theme_Attribute;
};
