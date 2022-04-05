const AdminService = require("../services/admin.service");

class Controller {
  // Lista todos os Usuários cadastrados no BD
  async fetchAllUsers(req, res) {
    const response = await AdminService.fetchAllUsers();
    //res.render("users", { msg: "testando" });
    res.json(response);
  }

  // Lista todas as Tecnologias cadastradas no BD
  async fetchAllTech(req, res) {
    const response = await AdminService.fetchAllTech();
    res.json(response);
  }

  // Lista todos os Agendamentos
  async fetchAllSchedules(req, res) {
    const response = await AdminService.fetchAllSchedules();
    res.json(response);
  }

  // Lista todos os usuários e com suas technologias
  async fetchAllUsersTech(req, res) {
    const response = await AdminService.fetchAllUsersTech();

    res.json(response);
  }

  async fetchAllUserAndTechs(req, res) {
    const response = await AdminService.fetchAllUserAndTechs();

    res.json(response);
  }
}

const AdminController = new Controller();
module.exports = AdminController;
