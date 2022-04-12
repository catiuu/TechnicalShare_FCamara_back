const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

// Faz login do Usuário e retorna um token
router.post("/login", userController.login);
// Rota de atualizar Perfil do usuário
router.patch("/profile", userController.updateProfile);
//Rota de adicionar Skill do usuário
router.post("/addskills", userController.addSkill);
// Rota para deletar uma skill do usuário
router.post("/removeskills", userController.removeSkill);
// Busca lista de usuários com base no parâmetro de busca
router.post("/search", userController.findUsers);
// Busca um usuário pelo id
router.post("/id", userController.findUserByPk);

module.exports = router;
