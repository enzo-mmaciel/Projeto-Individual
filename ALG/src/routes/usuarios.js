var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/insert_banco", function (req, res) {
    usuarioController.insert_banco(req, res);
});

router.post("/showQuiz", function (req, res) {
    usuarioController.showQuiz(req, res);
});

router.post("/findQuiz", function (req, res) {
    usuarioController.findQuiz(req, res);
});

router.post("/findLastQuiz", function (req, res) {
    usuarioController.findLastQuiz(req, res);
});

module.exports = router;