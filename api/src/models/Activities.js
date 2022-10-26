const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activities', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
    },
    difficulty: {
      type: DataTypes.INTEGER,
      validate: {
        max: 5,
        min: 1
      },
    },
    duration: {
      type: DataTypes.TIME,
    },
    season: {
      type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
    },
  });
};

/*
Actividad Turística con las siguientes propiedades:
  ID
  Nombre
  Dificultad (Entre 1 y 5)
  Duración
  Temporada (Verano, Otoño, Invierno o Primavera)
*/