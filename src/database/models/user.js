"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      User.belongsToMany(models.Technology, {
        through: models.UserTechnology,
        foreignKey: "userId",
      });

      User.belongsToMany(models.User, {
        through: models.Schedule,
        as: "User",
        foreignKey: "userId",
      });

      User.belongsToMany(models.User, {
        through: models.Schedule,
        as: "Mentor",
        foreignKey: "mentorId",
      });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      jobTitle: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    },
  );
  return User;
};
