const userService = require("../services/user.service");
const bcrypt = require("bcrypt");

class Controller {
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await userService.findUser(email);

      if (!user) return res.status(200).json("");

      const correctPassword = await bcrypt.compareSync(password, user.password);

      if (!correctPassword) return res.status(200).json("");

      res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ mensagem: error.message });
    }
  }

  async updateProfile(req, res) {
    try {
      const { userId } = req.body;
      const newProfile = {
        jobTitle: req.body.jobTitle,
        aboutMe: req.body.aboutMe,
        pronouns: req.body.pronouns,
      };
      const response = await userService.updateProfile(userId, newProfile);

      res.status(201).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async addSkill(req, res) {
    try {
      const { userId, skillId } = req.body;
      const response = await userService.addSkill(userId, skillId);

      res.status(201).json({ message: "ok" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async removeSkill(req, res) {
    try {
      const { userId, skillId } = req.body;
      const response = await userService.removeSkill(userId, skillId);

      res.status(201).json({ message: "ok" });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async findUsers(req, res) {
    try {
      const searchInput = req.body.searchInput;
      const response = await userService.findUsers(searchInput);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async findUserByPk(req, res) {
    try {
      const response = await userService.findUserByPk(req.body.id);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

const userController = new Controller();
module.exports = userController;
