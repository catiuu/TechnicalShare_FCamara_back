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
          initialData: "",
          finalDate: "",
        },
        {
          userId: 2,
          mentorId: 1,
          subject: "Need help with back-end",
          initialData: "",
          finalDate: "",
        },
        {
          userId: 3,
          mentorId: 4,
          subject: "need help with my app design",
          initialData: "",
          finalDate: "",
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Schedules", null, {});
  },
};
