const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

// Acha um usuário pelo e-mail
router.post("/", userController.findUser);

/*  */
// Rota de atualizar Perfil do usuário
router.post("/profile", userController.updateProfile);
//Rota de adicionar Skill do usuário
router.post("/skills", userController.addSkill);
// Rota para deletar uma skill do usuário
router.delete("/skills", userController.deleteSkill);

module.exports = router;
