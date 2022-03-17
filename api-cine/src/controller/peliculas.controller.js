const { Pelicula } = require("../db/models/pelicula");
const { Generos } = require("../db/models/generos");
const { Actores } = require("../db/models/actores");

const getMovies = async (req, res, next) => {
  let movies = []
  try {
    if (Object.keys(req.query).includes('title')) {
      movies = await Pelicula.findAll({ where: { titulo: req.query.title } });
    }
    if (Object.keys(req.query).length === 0) {
      movies = await Pelicula.findAll({ include: Generos, Actores });
    }
    if (movies.length !== 0) return res.send(movies);
    next()
  } catch (err) { next(err) };
};

const insertMovie = async (req, res, next) => {
  if (
    !req.body.titulo || !req.body.sinopsis || !req.body.poster || !req.body.duracion ||
    !req.body.clasificacion || !req.body.director || !req.body.puntuación ||
    !req.body.pais || !req.body.distribuidora || !req.body.trailer
  ) {
    return res.status(406).json({ msg: 'All atrributes are required' })
  }
  try {
    const movie = await Pelicula.create({
      titulo: req.body.titulo,
      sinopsis: req.body.sinopsis,
      poster: req.body.poster,
      duracion: req.body.duracion,
      clasificacion: req.body.clasificacion,
      director: req.body.director,
      puntuación: req.body.puntuación,
      pais: req.body.pais,
      distribuidora: req.body.distribuidora,
      trailer: req.body.trailer
    })
    res.json(movie)
  } catch (err) { next(err) }
}

const getMovie = async (req, res, next) => {
  const id = req.params.id
  try {
    const movie = await Pelicula.findByPk(id)
    if (movie) return res.json(movie)
    next()
  } catch (err) { next(err) }
}

const updateMovie = async (req, res, next) => {
  const id = req.params.id
  try {
    const [movie] = await Pelicula.update(req.body, { where: { id: id } })
    if (movie) return res.json(await Pelicula.findByPk(id))
    next()
  } catch (err) { next(err) }
}

const destroyMovie = async (req, res, next) => {
  const id = req.params.id
  try {
    const deleted = await Pelicula.destroy({ where: { id: id } })
    if (deleted) return res.json({ msg: 'Deleted' })
    next()
  } catch (err) { next(err) }
}

module.exports = { getMovies, insertMovie, getMovie, updateMovie, destroyMovie };
