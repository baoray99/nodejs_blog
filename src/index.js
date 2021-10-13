const path = require("path");
const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;

app.use(
  express.static(path.join(__dirname, "public"))
); /* thư mục tĩnh khi gõ trên path /img/logo.png sẽ ra hình */
//Template engines
app.engine(
  "hbs",
  exphbs({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views")); /* set views */
//HTTP Logger
app.use(morgan("combined"));
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
