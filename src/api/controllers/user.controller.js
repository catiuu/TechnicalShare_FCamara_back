const userService = require("../services/user.service");
const bcrypt = require("bcrypt");
require("dotenv-safe").config();
const jwt = require("jsonwebtoken");

class Controller {
  async login(req, res) {
    const { email, password } = req.body;

    try {
      const user = await userService.findUser(email);

      if (!user) {
        return res
          .status(400)
          .json({ mensagem: "O usuario não foi encontrado." });
      }

      const correctPassword = await bcrypt.compare(password, user.password);

      if (!correctPassword) {
        return res
          .status(400)
          .json({ mensagem: "E-mail ou senha não conferem." });
      }

      const token = jwt.sign({ id: user.id }, process.env.SENHA_JWT, {
        expiresIn: "1h",
      });

      return res.status(200).json({ token });
    } catch (error) {
      return res.status(500).json({ mensagem: error.message });
    }
  }

  async updateProfile(req, res) {
    try {
      const userId = req.body.id;
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
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteSkill(req, res) {
    try {
      const { userId, skillId } = req.body;
      const response = await userService.deleteSkill(userId, skillId);
      res.status(200).json(response);
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

    const response = await userService.findUserByPk(req.body.id);
  }
}

const userController = new Controller();
module.exports = userController;
