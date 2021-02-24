const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const path = require("path");
const passport = require("passport");
const http = require("http");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

const keys = require("./config/key");



// App setup

const app = express();

//Database setup
mongoose
  .connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

// Middleware
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan("combined"));
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use("./images", express.static(path.join(__dirname, "images")));
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookiekey],
  })
);

// App routes

require("./Routes/authRoutes")(app);

//Server Setup
const PORT = process.env.PORT || 5080;
const server = http.createServer(app);
server.listen(PORT, () => console.log(`server connected on ${PORT}`));
