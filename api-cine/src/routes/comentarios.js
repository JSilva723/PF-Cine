const { Router } = require("express");
const router = Router();


//importar funciones desde el controlador aqui
const {
    postComentario, getComentarios
} = require('../controller/comentarios.controller')

router.post("/", postComentario)
router.get("/", getComentarios)


module.exports = router;