const { Comentarios } = require("../db/models/comentarios");

//desarrollar aqui las funciones para los pedidos a la base de datos
const postComentario = async (req, res) => {
    try {
        const {
            comentario, puntuación
        } = req.body

        const review = await Comentarios.create({
            comentario, puntuación
        })
        res.send("¡comentario enviado!")
    }
    catch (e) {
        console.log("error from post(/comentarios)", e)
    }
}

module.exports = {
    //funciones a exportar para las rutas
    postComentario
}