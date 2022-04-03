"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "UserTechnology",
      [
        {
          userId: 1,
          technologyId: 7,
        },
        {
          userId: 1,
          technologyId: 2,
        },
        {
          userId: 2,
          technologyId: 1,
        },
        {
          userId: 2,
          technologyId: 4,
        },
        {
          userId: 2,
          technologyId: 12,
        },
        {
          userId: 2,
          technologyId: 13,
        },
        {
          userId: 2,
          technologyId: 14,
        },
        {
          userId: 3,
          technologyId: 10,
        },
        {
          userId: 4,
          technologyId: 10,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("UserTechnology", null, {});
  },
};
