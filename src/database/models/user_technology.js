"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserTechnology extends Model {
    static associate(models) {
      // define association here
    }
  }
  UserTechnology.init(
    {},
    {
      sequelize,
      modelName: "UserTechnology",
      freezeTableName: true,
    },
  );
  return UserTechnology;
};
