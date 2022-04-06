"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          fullName: "Sonic O Ouriço",
          email: "sonic@email.com",
          jobTitle: "Front-End Developer",
          phone: "(XX)-XXXXX-XXXX",
          aboutMe: "Sou o porco espinho mais rápido do mundo!",
        },
        {
          fullName: "Pikachu",
          email: "pikachu@email.com",
          jobTitle: "Front-End Developer",
          phone: "(XX)-XXXXX-XXXX",
          aboutMe: "Sou o Pokémon mais popular!",
        },
        {
          fullName: "Mario Bros",
          email: "mario.bros@email.com",
          jobTitle: "Back-End Developer",
          phone: "(XX)-XXXXX-XXXX",
          aboutMe: "Sou responsável pelo melhor videogame de todos os tempos!",
        },
        {
          fullName: "Laura Croft",
          email: "laura_croft@email.com",
          jobTitle: "Teach Lead UX",
          phone: "(XX)-XXXXX-XXXX",
          aboutMe: "Nada fica feio comigo!",
        },
        {
          fullName: "Jill Valentine",
          email: "jill_valentine@email.com",
          jobTitle: "UX Designer",
          phone: "(XX)-XXXXX-XXXX",
          aboutMe: "Sou inteligente, calma e habilidosa!",
        },
        {
          fullName: "Yuna Final Fantasy",
          email: "yuna@email.com",
          jobTitle: "Full-Stack Developer",
          phone: "(XX)-XXXXX-XXXX",
          aboutMe: "Sou inteligente, calma e habilidosa!",
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
