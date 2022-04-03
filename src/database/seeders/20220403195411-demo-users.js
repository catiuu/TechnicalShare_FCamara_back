"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "John Doe",
          email: "john_doe@email.com",
          jobTitle: "back-end developer",
        },
        {
          name: "Jane Doe",
          email: "jane_doe@email.com",
          jobTitle: "front-end developer",
        },
        {
          name: "Mary Silva",
          email: "mary@email.com",
          jobTitle: "UX",
        },
        {
          name: "Mario Bros",
          email: "mario_bros@email.com",
          jobTitle: "UX",
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
