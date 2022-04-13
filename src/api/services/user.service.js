const { User, Skill, UserSkill } = require("../../database/models");
const { Op, Sequelize } = require("sequelize");

class Service {
  async login(email, password) {
    console.log("SERVICE LOGIN");

    const user = await User.findOne({
      where: {
        email,
        password,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      include: {
        model: Skill,
        through: {
          attributes: [],
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
    });

    console.log(user);
    return user;
  }

  async updateProfile(userId, newData) {
    const updatedUser = await User.update(
      {
        jobTitle: newData.jobTitle,
        aboutMe: newData.aboutMe,
        pronouns: newData.pronouns,
      },
      {
        where: {
          id: userId,
        },
      },
    );

    return updatedUser;
  }

  async addSkill(userId, skillId) {
    const found = await UserSkill.findOne({
      where: {
        userId,
        skillId,
      },
    });

    if (!found) {
      await UserSkill.create({
        userId,
        skillId,
      });

      return `ok`;
    }
  }

  async removeSkill(userId, skillId) {
    await UserSkill.destroy({
      where: {
        userId,
        skillId,
      },
    });
    return "ok";
  }

  async findUsers(searchInput) {
    const lowerInput = searchInput.toLowerCase();

    const users = await User.findAll({
      where: {
        [Op.or]: [
          Sequelize.where(Sequelize.fn("lower", Sequelize.col("fullName")), {
            [Op.like]: `%${lowerInput}%`,
          }),
          Sequelize.where(Sequelize.fn("lower", Sequelize.col("jobTitle")), {
            [Op.like]: `%${lowerInput}%`,
          }),
          Sequelize.where(Sequelize.fn("lower", Sequelize.col("name")), {
            [Op.like]: `%${lowerInput}%`,
          }),
        ],
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "password"],
      },
      include: {
        model: Skill,
        through: {
          attributes: [],
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
    });

    return users;
  }

  async findUser(email) {
    const user = await User.findOne({
      where: {
        email,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      include: {
        model: Skill,
        through: {
          attributes: [],
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
    });

    return user;
  }

  async findUserByPk(id) {
    const user = await User.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "password"],
      },
      include: {
        model: Skill,
        through: {
          attributes: [],
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
    });

    return user;
  }
}

const userService = new Service();
module.exports = userService;
