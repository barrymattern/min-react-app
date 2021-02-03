'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      validates: {
        isEmail: true,
        len: [3, 255],
      }
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING,
      validates: {
        len: [1, 255],
      },
    },
    hashedPassword: {
      allowNull: false,
      type: DataTypes.STRING.BINARY,
      validates: {
        len: [60, 60],
      },
    },
    profileImageUrl: {
      allowNull: true,
      type: DataTypes.STRING,
      validates: {
        len: [3, 500],
      },
    },
    tokenId: {
      type: DataTypes.STRING
    }
  }, {});

  User.associate = function(models) {
    // associations can be defined here
    const columnMapping = {
      through: 'Favorite',
      otherKey: 'theme_id',
      foreignKey: 'user_id',
    };

    // User.hasMany(models.Theme, { foreignKey: 'user_id' });
    User.belongsToMany(models.Theme, columnMapping);
  };

  return User;
};
