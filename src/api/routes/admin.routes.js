const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/admin.controller");

/* GET de Todas as tabelas do BD. */
router.get("/users", AdminController.fetchAllUsers);

router.get("/skills", AdminController.fetchAllSkills);

/* GET de Buscas de Users por technologia. */
router.get("/users/skills", AdminController.fetchAllUserSkills);

module.exports = router;
