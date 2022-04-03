"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("UserTechnology", {
      userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "Users", // name of Target table
          key: "id", // key in Target table that we're referencing
        },
      },
      technologyId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "Technologies", // name of Target table
          key: "id", // key in Target table that we're referencing
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("UserTechnology");
  },
};
