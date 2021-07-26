const sequelize = require("../database.js");
const { DataTypes } = require("sequelize");

const Recipe = sequelize.define("recipe", {
  id: { type: DataTypes.STRING, primaryKey: true, unique: true },
  name: { type: DataTypes.STRING },
  parentId: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING },
});

module.exports = {
  Recipe,
};
