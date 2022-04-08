const express = require("express");
const router = express.Router();
const Controller = require("../controllers/admin.controller");

/* GET de Todas as tabelas do BD. */
router.get("/users", Controller.fetchAllUsers);

router.get("/skills", Controller.fetchAllSkills);

/* GET de Buscas de Users por technologia. */
router.get("/users/skills", Controller.fetchAllUserSkills);

module.exports = router;
