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
    // light: {
    //   allowNull: false,
    //   type: DataTypes.BOOLEAN,
    // },
    commentColor: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: [1, 25],
      },
    },
    funcKeywordColor: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: [1, 25],
      },
    },
    funcNameColor: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: [1, 25],
      },
    },
    roundBraceColor: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: [1, 25],
      },
    },
    parameterColor: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: [1, 25],
      },
    },
    curlyBraceColor: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: [1, 25],
      },
    },
    letConstColor: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: [1, 25],
      },
    },
    variableColor: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: [1, 25],
      },
    },
    operatorColor: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: [1, 25],
      },
    },
    numberColor: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: [1, 25],
      },
    },
    punctuationColor: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: [1, 25],
      },
    },
    fatArrowColor: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: [1, 25],
      },
    },
    methodColor: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: [1, 25],
      },
    },
    stringColor: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: [1, 25],
      },
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

  Theme.save = async function ({
    name,
    commentColor,
    funcKeywordColor,
    funcNameColor,
    roundBraceColor,
    parameterColor,
    curlyBraceColor,
    letConstColor,
    variableColor,
    operatorColor,
    numberColor,
    punctuationColor,
    fatArrowColor,
    methodColor,
    stringColor,
  }) {
    const theme = await Theme.create({
      name,
      commentColor,
      funcKeywordColor,
      funcNameColor,
      roundBraceColor,
      parameterColor,
      curlyBraceColor,
      letConstColor,
      variableColor,
      operatorColor,
      numberColor,
      punctuationColor,
      fatArrowColor,
      methodColor,
      stringColor,
    });
    return await Theme.findByPk(theme.id);
  };

    // Theme.belongsTo(models.User, { foreignKey: 'user_id' });
    Theme.belongsToMany(models.User, columnMapping);
  };
  return Theme;
};