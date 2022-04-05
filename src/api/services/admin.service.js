const { QueryTypes } = require("sequelize");
const {
  User,
  Technology,
  Schedule,
  UserTechnology,
  sequelize,
} = require("../../database/models");

class Service {
  async fetchAllUsers() {
    const users = await User.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    return users;
  }

  async fetchAllTech() {
    const techs = await Technology.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    return techs;
  }

  async fetchAllSchedules() {
    const schedules = await Schedule.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    return schedules;
  }

  async fetchAllUsersTech() {
    const usersTechs = await UserTechnology.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    return usersTechs;
  }

  async fetchAllUserAndTechs() {
    const userAndTechs = await User.findAll({
      attributes: {
        include: ["id", "name", "email", "jobTitle"],
        exclude: ["createdAt", "updatedAt"],
      },
      include: Technology,
    });
    return userAndTechs;
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
