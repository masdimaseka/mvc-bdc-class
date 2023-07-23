const passport = require("../lib/passport");

class authController {
  static loginPage(req, res) {
    if (req.isAuthenticated()) return res.redirect("/");
    res.render("pages/login");
  }
  static async login(req, res, next) {
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/login",
      failureFlash: true, // Untuk mengaktifkan express flash
    })(req, res, next);
  }

  static async logout(req, res, next) {
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      res.redirect("/login");
    });
  }
}

module.exports = authController;
