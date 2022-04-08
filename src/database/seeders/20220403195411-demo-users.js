"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          fullName: "Sonic O Ouriço",
          email: "sonic@email.com",
          jobTitle: "Desenvolvedor Front-End",
          phone: "(01)-55555-1234",
          aboutMe: "Sou o porco espinho mais rápido do mundo!",
          password: bcrypt.hashSync("12345", 10),
          pronouns: "Ele/Dele",
        },
        {
          fullName: "Pikachu",
          email: "pikachu@email.com",
          jobTitle: "Desenvolvedor Front-End",
          phone: "(01)-55555-1234",
          aboutMe: "Sou o Pokémon mais popular!",
          password: bcrypt.hashSync("12345", 10),
          pronouns: "Elu/Delu",
        },
        {
          fullName: "Mario Bros",
          email: "mario.bros@email.com",
          jobTitle: "Desenvolvedor Back-End",
          phone: "(01)-55555-1234",
          aboutMe: "Sou responsável pelo melhor videogame de todos os tempos!",
          password: bcrypt.hashSync("12345", 10),
          pronouns: "Ele/Dele",
        },
        {
          fullName: "Laura Croft",
          email: "laura_croft@email.com",
          jobTitle: "Teach Lead UX/UI",
          phone: "(01)-55555-1234",
          aboutMe: "Nada fica feio comigo!",
          password: bcrypt.hashSync("12345", 10),
          pronouns: "Ela/Dela",
        },
        {
          fullName: "Jill Valentine",
          email: "jill_valentine@email.com",
          jobTitle: "UX/UI",
          phone: "(01)-55555-1234",
          aboutMe: "Sou inteligente, calma e habilidosa!",
          password: bcrypt.hashSync("12345", 10),
          pronouns: "Ela/Dela",
        },
        {
          fullName: "Yuna Final Fantasy",
          email: "yuna@email.com",
          jobTitle: "Full-Stack Developer",
          phone: "(01)-55555-1234",
          aboutMe: "Ofereço mentoria de carreira!",
          password: bcrypt.hashSync("12345", 10),
          pronouns: "Elu/Delu",
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
