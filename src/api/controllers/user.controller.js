const userService = require("../services/user.service");

class Controller {
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
        phone: req.body.phone,
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
