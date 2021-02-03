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
      validates: {
        len: [1, 500],
      },
    },
    value: {
      allowNull:false,
      type: DataTypes.STRING,
      validates: {
        len:[1, 50],
      },
    },
  }, {});
  Theme_Attribute.associate = function(models) {
    // associations can be defined here
  };
  return Theme_Attribute;
};