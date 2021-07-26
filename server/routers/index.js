const Router = require("express");
const router = new Router();
const recipeRouter = require("./recipeRouter.js");

router.use("/recipes", recipeRouter);

module.exports = router;
