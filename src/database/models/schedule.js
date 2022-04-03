"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Schedule.init(
    {
      id_user: DataTypes.INTEGER,
      id_mentor: DataTypes.INTEGER,
      subject: DataTypes.STRING,
      initial_date: DataTypes.DATE,
      final_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Schedule",
    },
  );
  return Calendar;
};
