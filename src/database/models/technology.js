"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Technology extends Model {
    static associate(models) {
      // define association here
      Technology.belongsToMany(models.User, {
        through: models.UserTechnology,
        foreignKey: "technologyId",
      });
    }
  }
  Technology.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Technology",
    },
  );
  return Technology;
};
