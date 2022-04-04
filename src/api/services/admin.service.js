const {
  User,
  Technology,
  Schedule,
  UserTechnology,
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
    const userTech = await UserTechnology.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    return userTech;
  }
}

const AdminService = new Service();
module.exports = AdminService;
