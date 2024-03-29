const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        max: 5,
        min: 1
      },
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { 
        max: 24,
        min: 1
      }
    },
    season: {
      type: DataTypes.ENUM('Summer', 'Autumn', 'Winter', 'Spring'),
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