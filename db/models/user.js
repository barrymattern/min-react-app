'use strict';
const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: [1, 255],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Cannot ben an email.');
          }
        },
      },
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        len: [3, 255],
      }
    },
    hashedPassword: {
      allowNull: false,
      type: DataTypes.STRING.BINARY,
      validate: {
        len: [60, 60],
      },
    },
    profileImageUrl: {
      allowNull: true,
      type: DataTypes.STRING,
      validate: {
        len: [3, 500],
      },
    },
    tokenId: {
      type: DataTypes.STRING
    },
  },
  {
    defaultScope: {
      attributes: {
        exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt']
      }
    },
    scopes: {
      currentUser: {
        attributes: { exclude: ['hashedPassword'] }
      },
      loginUser: {
        attributes: {}
      }
    }
  });

  User.associate = function(models) {
    // associations can be defined here
    const columnMapping = {
      through: 'Favorite',
      otherKey: 'theme_id',
      foreignKey: 'user_id',
    };

    User.prototype.toSafeObject = function () {
      //This cannot be an arrow function (scoping)
      const { id, username, email } = this; // context will be the User instance
      return { id, username, email };
    };

    User.prototype.validatePassword = function (password) {
      return bcrypt.compareSync(password, this.hashedPassword.toString());
    };

    User.getCurrentUserById = async function (id) {
      return await User.scope('currentUser').findByPk(id);
    };

    User.login = async function ({ username, email, password }) {
      // const { Op } = require('sequelize');
      const user = await User.scope('loginUser').findOne({
        where: {
          username,
          email,
        },
      });

      if (user && user.validatePassword(password)) {
        return await User.scope('currentUser').findByPk(user.id);
      }
    };

    User.signup = async function ({ username, email, password }) {
      const hashedPassword = bcrypt.hashSync(password);
      const user = await User.create({
        username,
        email,
        hashedPassword,
      });
      return await User.scope('currentUser').findByPk(user.id);
    };

    // User.hasMany(models.Theme, { foreignKey: 'user_id' });
    User.belongsToMany(models.Theme, columnMapping);
  };

  return User;
};
