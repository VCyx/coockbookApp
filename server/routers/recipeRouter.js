const Router = require("express");
const router = new Router();
const RecipeController = require("./RecipeController.js");

router.get("/", RecipeController.getAll);
router.post("/", RecipeController.addOne);
router.put("/:id", RecipeController.changeOne);
router.post("/:id", RecipeController.addOne);

module.exports = router;
