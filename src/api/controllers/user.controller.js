const userService = require("../services/user.service");
const bcrypt = require("bcrypt");
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
          .json({ mensagem: "Email e senha não conferem." });
      }

      const token = jwt.sign({ id: user.id }, process.env.SENHA_JWT, {
        expiresIn: "1h",
      });

      return res.status(200).json({ token });
    } catch (error) {
      return res.status(500).json({ mensagem: error.message });
    }
  }

  async findUser(req, res) {
    try {
      const { email } = req.body;
      const response = await userService.findUser(email);

      res.json(response);
    } catch (error) {
      res.status(200).json({ message: error.message });
    }
  }

  async updateProfile(req, res) {
    try {
      const userId = req.body.id; // req.params.id ???
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
    const { userId, skillId } = req.body;
    const response = await userService.deleteSkill(userId, skillId);

    res.status(200).json(response);
  }
}

const userController = new Controller();
module.exports = userController;
