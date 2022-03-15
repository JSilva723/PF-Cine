const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Pelicula", {
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    sinopsis: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    poster: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duracion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    clasificacion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    director: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    puntuación: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    pais: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    distribuidora: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    trailer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
