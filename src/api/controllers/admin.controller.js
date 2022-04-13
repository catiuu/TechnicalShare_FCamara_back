const AdminService = require("../services/admin.service");

class Controller {
  async fetchAllUsers(req, res) {
    const response = await AdminService.fetchAllUsers();
    res.json(response);
  }

  async fetchAllSkills(req, res) {
    const response = await AdminService.fetchAllSkills();

    res.json(response);
  }

  async fetchAllUserSkills(req, res) {
    const response = await AdminService.fetchAllUserSkills();

    res.json(response);
  }
}

const AdminController = new Controller();
module.exports = AdminController;
