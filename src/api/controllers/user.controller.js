const userService = require("../services/user.service");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class Controller {
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await userService.findUser(email);

      if (!user) {
        return res
          .status(400)
          .json({ mensagem: "O usuario não foi encontrado." });
      }

      const correctPassword = await bcrypt.compareSync(password, user.password);

      if (!correctPassword) {
        return res
          .status(400)
          .json({ mensagem: "E-mail ou senha não conferem." });
      }
      //Auth OK
      jwt.sign(
        { id: user.id, email: user.email },
        process.env.SECRET_JWT,
        {
          expiresIn: "1h", //"1h" --> 300 = 5 minutos
        },
        (err, token) => {
          if (err) {
            res.status(400).json("Falha interna!");
          } else {
            res.status(200).json({ auth: true, token: token });
          }
        },
      );
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
