//const { QueryTypes } = require("sequelize");
const { User, Skill, UserSkill, sequelize } = require("../../database/models");

class Service {
  async fetchAllUsers() {
    const users = await User.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
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
        //include: ["id", "fullName", "email", "jobTitle", "aboutMe"],
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
    return userSkills;
  }
}

const AdminService = new Service();
module.exports = AdminService;

// const query = `select u."id", u."name", u."jobTitle", u."email", t."id", t."name" from "Users" u, "UserTechnology" ut, "Technologies" t
// where u."id" = ut."userId" and ut."technologyId"  = t."id" `;
// const result = await sequelize.query(query, {
//   raw: false,
//   type: QueryTypes.SELECT,
// });
// return result;
