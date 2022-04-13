"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "UserSkill",
      [
        {
          userId: 1,
          skillId: 1,
        },
        {
          userId: 1,
          skillId: 11,
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
          skillId: 4,
        },
        {
          userId: 2,
          skillId: 8,
        },
        {
          userId: 2,
          skillId: 12,
        },
        {
          userId: 2,
          skillId: 16,
        },
        {
          userId: 3,
          skillId: 3,
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
          userId: 3,
          skillId: 7,
        },
        {
          userId: 3,
          skillId: 20,
        },
        {
          userId: 4,
          skillId: 8,
        },
        {
          userId: 4,
          skillId: 9,
        },
        {
          userId: 4,
          skillId: 14,
        },
        {
          userId: 4,
          skillId: 16,
        },
        {
          userId: 4,
          skillId: 19,
        },
        {
          userId: 5,
          skillId: 9,
        },
        {
          userId: 5,
          skillId: 14,
        },
        {
          userId: 5,
          skillId: 16,
        },
        {
          userId: 5,
          skillId: 19,
        },
        {
          userId: 6,
          skillId: 1,
        },
        {
          userId: 6,
          skillId: 4,
        },
        {
          userId: 6,
          skillId: 13,
        },
        {
          userId: 7,
          skillId: 10,
        },
        {
          userId: 7,
          skillId: 14,
        },
        {
          userId: 5,
          skillId: 16,
        },
        {
          userId: 5,
          skillId: 19,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("UserSkill", null, {});
  },
};
