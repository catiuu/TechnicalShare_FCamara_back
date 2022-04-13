const express = require("express");
const router = express.Router();
const Controller = require("../controllers/admin.controller");

router.get("/users", Controller.fetchAllUsers);
router.get("/skills", Controller.fetchAllSkills);
router.get("/users/skills", Controller.fetchAllUserSkills);

module.exports = router;
