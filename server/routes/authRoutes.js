const Authentication = require("../controller/authentication");
const Auth = require("../middleware/auth");

module.exports = function (app) {
  // auth routes
  app.get("/", Auth.requireAuth, function (req, res) {
    res.send({ hi: "there" });
  });
  app.post("/signin", Auth.requireSignin, Authentication.signin);
  app.post("/signup", Authentication.signup);
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });
};
