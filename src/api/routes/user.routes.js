const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.post("/login", userController.login);

router.patch("/update", userController.updateProfile);

router.post("/addskill", userController.addSkill);

router.post("/removeskill", userController.removeSkill);

router.post("/search", userController.findUsers);

router.post("/id", userController.findUserByPk);

module.exports = router;
