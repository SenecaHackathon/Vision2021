const passport = require("passport");
const passportService = require("../services/passport");
exports.requireAuth = passport.authenticate("jwt", { session: false });
exports.requireSignin = passport.authenticate("local", { session: false });
