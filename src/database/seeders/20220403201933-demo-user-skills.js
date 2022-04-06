"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "UserSkill",
      [
        {
          userId: 1,
          skillId: 7,
        },
        {
          userId: 1,
          skillId: 12,
        },
        {
          userId: 1,
          skillId: 13,
        },
        {
          userId: 1,
          skillId: 14,
        },
        {
          userId: 2,
          skillId: 2,
        },
        {
          userId: 2,
          skillId: 13,
        },
        {
          userId: 2,
          skillId: 14,
        },
        {
          userId: 3,
          skillId: 4,
        },
        {
          userId: 3,
          skillId: 5,
        },
        {
          userId: 3,
          skillId: 6,
        },
        {
          userId: 4,
          skillId: 15,
        },
        {
          userId: 4,
          skillId: 9,
        },
        {
          userId: 4,
          skillId: 10,
        },
        {
          userId: 5,
          skillId: 11,
        },
        {
          userId: 6,
          skillId: 16,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("UserSkill", null, {});
  },
};
