const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/admin.controller");

/* GET users listing. */
router.get("/users", AdminController.fetchAllUsers);

router.get("/techs", AdminController.fetchAllTech);

router.get("/schedules", AdminController.fetchAllSchedules);

router.get("/users/techs", AdminController.fetchAllUsersTech);

module.exports = router;
