const express = require("express");
const expressHbs = require("express-handlebars");
const hbs = require("hbs");
const app = express();

app.engine(
  "hbs",
  expressHbs({
    layoutsDir: "views/layouts",
    defaultLayout: "layout",
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.use("/contact", function (request, response) {
  response.render("contact", {
    title: "Мои контакты",
    email: "gavgav@mycorp.com",
    phone: "+1234567890",
  });
});

app.use("/", function (request, response) {
  response.render("home.hbs");
});

console.log("http://localhost:3000");
app.listen(3000);
