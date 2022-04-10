"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
    static associate(models) {
      // define association here
      Skill.belongsToMany(models.User, {
        through: models.UserSkill,
        foreignKey: "skillId",
      });
    }
  }
  Skill.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Skill",
    },
  );
  return Skill;
};
