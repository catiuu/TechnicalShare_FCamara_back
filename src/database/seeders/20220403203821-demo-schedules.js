"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Schedules",
      [
        {
          userId: 1,
          mentorId: 2,
          subject: "React Studies",
          initialDate: new Date(2022, 3, 25, 8),
          finalDate: new Date(2022, 3, 25, 9),
        },
        {
          userId: 2,
          mentorId: 1,
          subject: "Need help with back-end",
          initialDate: new Date(2022, 3, 12, 11),
          finalDate: new Date(2022, 3, 12, 12),
        },
        {
          userId: 3,
          mentorId: 1,
          subject: "",
          initialDate: new Date(2022, 3, 12, 8),
          finalDate: new Date(2022, 3, 12, 9),
        },
        {
          userId: 3,
          mentorId: 4,
          subject: "need help with my app design",
          initialDate: new Date(2022, 5, 14, 14),
          finalDate: new Date(2022, 5, 14, 15),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Schedules", null, {});
  },
};
