const { Recipe } = require("../models/models");
const { v4 } = require("uuid");
const sequelize = require("../database.js");

class RecipeController {
  async getAll(req, res) {
    const recipesData = await Recipe.findAndCountAll({
      order: sequelize.col("name"),
    });
    return await res.json(recipesData);
  }

  async addOne(req, res) {
    const { name, description } = req.body;
    const { id: parentId } = req.params;

    const id = v4();

    const addRecipe = await Recipe.create({
      id,
      name,
      description,
      parentId,
    });

    return res.json(addRecipe);
  }

  async childRecipe(req, res) {
    const { id: parentId } = req.params;
    const { name, description } = req.body;
    const id = v4();

    const addRecipe = await Recipe.create({
      id,
      name,
      description,
      parentId,
    });

    return res.json(addRecipe);
  }

  async changeOne(req, res) {
    const { id, name, description } = req.body;

    const changeRecipe = await Recipe.update(
      { name, description },
      { where: { id } }
    );

    return res.json(changeRecipe);
  }
}

module.exports = new RecipeController();
