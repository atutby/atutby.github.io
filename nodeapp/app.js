const express = require("express");
const hbs = require("hbs");
const app = express();

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
app.listen(3000);
