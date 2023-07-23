const { Router } = require("express");

const auth = require("../middleware/auth");

const shoeRouter = require("./shoe.router");
const categoryRouter = require("./category.router");
const authRouter = require("./auth.router");

const router = Router();

router.use(authRouter);

router.use(auth);

router.get("/", (req, res) => {
  res.render("pages/index");
});

router.get("/about", (req, res) => {
  res.render("pages/about");
});

router.use(shoeRouter);
router.use(categoryRouter);

module.exports = router;
