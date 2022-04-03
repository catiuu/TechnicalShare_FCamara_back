"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "Schedules", // name of Source table
      "userId", //name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: "Users", // name of Target table
          key: "id", // key in Target table that we're referencing
        },
      },
    );

    await queryInterface.addColumn(
      "Schedules", // name of Source table
      "mentorId", //name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: "Users", // name of Target table
          key: "id", // key in Target table that we're referencing
        },
      },
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      "Schedules", // name of Source table
      "userId", // key we want to remove
    );

    await queryInterface.removeColumn(
      "Schedules", // name of Source table
      "mentorId", // key we want to remove
    );
  },
};
