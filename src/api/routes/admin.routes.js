const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/admin.controller");

/* GET de Todas as tabelas do BD. */
router.get("/users", AdminController.fetchAllUsers);

router.get("/techs", AdminController.fetchAllTech);

router.get("/schedules", AdminController.fetchAllSchedules);

router.get("/users_and_techs", AdminController.fetchAllUsersTech);

/* GET de Buscas de Users por technologia. */
router.get("/users/techs", AdminController.fetchAllUserAndTechs);

module.exports = router;
