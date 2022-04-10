const AdminService = require("../services/admin.service");

class Controller {
  // Lista todos os Users
  async fetchAllUsers(req, res) {
    const response = await AdminService.fetchAllUsers();
    //res.render("users", { msg: "testando" });
    res.json(response);
  }

  // Lista todas os Skills
  async fetchAllSkills(req, res) {
    const response = await AdminService.fetchAllSkills();

    res.json(response);
  }

  // Lista todas os Users e suas Skills
  async fetchAllUserSkills(req, res) {
    const response = await AdminService.fetchAllUserSkills();

    res.json(response);
  }
}

const AdminController = new Controller();
module.exports = AdminController;
