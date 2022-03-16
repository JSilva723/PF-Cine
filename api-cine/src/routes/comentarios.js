const { Router } = require("express");
const router = Router();


//importar funciones desde el controlador aqui
const { postComentario } = require('../controller/comentarios.controller')

router.post("/", postComentario)


module.exports = router;