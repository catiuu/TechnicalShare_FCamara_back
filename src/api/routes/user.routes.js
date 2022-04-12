const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const auth = require("../middlewares/authToken");
const checkUser = require("../middlewares/checkUser");

// Faz login do Usuário e retorna um token
router.post("/login", userController.login);
// Rota de atualizar Perfil do usuário
router.patch("/profile", auth, checkUser, userController.updateProfile);
//Rota de adicionar Skill do usuário
router.post("/addskills", auth, checkUser, userController.addSkill);
// Rota para deletar uma skill do usuário
router.post("/removeskills", auth, checkUser, userController.removeSkill);
// Busca lista de usuários com base no parâmetro de busca
router.post("/search", auth, userController.findUsers);
// Busca um usuário pelo id
router.post("/id", auth, userController.findUserByPk);

module.exports = router;
