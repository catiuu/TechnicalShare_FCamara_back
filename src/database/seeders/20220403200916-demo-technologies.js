"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Technologies",
      [
        {
          name: "Javascript",
        },
        {
          name: "Python",
        },
        {
          name: "Java",
        },
        {
          name: "Nodejs",
        },
        {
          name: "C++",
        },
        {
          name: "SQL",
        },
        {
          name: "MongoDB",
        },
        {
          name: "Sequelize",
        },
        {
          name: "Figma",
        },
        {
          name: "Adobe XD",
        },
        {
          name: "InVision",
        },
        {
          name: "React",
        },
        {
          name: "HTML",
        },
        {
          name: "CSS",
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Technologies", null, {});
  },
};
