const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");
const methodOverride = require("method-override");

const app = express();
const port = 3000;

const route = require("./routes/index.js");
const db = require("./config/db");

// connect to db
db.connect();

app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(
  express.json({
    inflate: true,
    limit: "100kb",
  })
);
// HTTP logger
// app.use(morgan("combined"));

app.use(methodOverride("_method"));

// Template Engine
app.engine(
  ".hbs",
  handlebars.engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// route init
route(app);
app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
