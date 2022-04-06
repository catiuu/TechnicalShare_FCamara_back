"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserSkill extends Model {
    static associate(models) {
      // define association here
    }
  }
  UserSkill.init(
    {},
    {
      sequelize,
      modelName: "UserSkill",
      freezeTableName: true,
    },
  );
  return UserSkill;
};
