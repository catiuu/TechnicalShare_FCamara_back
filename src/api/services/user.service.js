const { User, Skill, UserSkill } = require("../../database/models");

class Service {
  async findUser(email) {
    const user = await User.findOne({
      where: {
        email,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      include: {
        model: Skill,
        through: {
          attributes: [],
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
    });

    return user;
  }

  async updateProfile(userId, newData) {
    const updatedUser = await User.update(
      {
        phone: newData.phone,
        aboutMe: newData.aboutMe,
        pronouns: newData.pronouns,
      },
      {
        where: {
          id: userId,
        },
      },
    );

    return 1;
  }

  async addSkill(userId, skillId) {
    const found = await UserSkill.findOne({
      where: {
        userId,
        skillId,
      },
    });

    if (!found) {
      await UserSkill.create({
        userId,
        skillId,
      });

      return 1;
    }
  }

  async deleteSkill(userId, skillId) {
    await UserSkill.destroy({
      where: {
        userId,
        skillId,
      },
    });
    return 1;
  }
}

const userService = new Service();
module.exports = userService;
