const { User, Skill } = require("../../database/models");

class Service {
  async fetchAllUsers() {
    const users = await User.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "password"],
      },
    });
    return users;
  }

  async fetchAllSkills() {
    const skills = await Skill.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    return skills;
  }

  async fetchAllUserSkills() {
    const userSkills = await User.findAll({
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
    return userSkills;
  }
}

const AdminService = new Service();
module.exports = AdminService;
