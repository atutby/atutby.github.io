const express = require("express");
const app = express();
app.set("view engine", "hbs");
app.set("views", "templates");

app.use("/contact", function (request, response) {
  response.render("contact.hbs", {
    title: "Мои контакты",
    emailsVisible: true,
    emails: ["gavgav@mail.ru", "miaow@mail.ru"],
    phone: "+123412342134",
  });
});
app.use("/", function (request, response) {
  response.end("Главная станица Main page");
});

app.listen(3000);

console.log("http://localhost:3000");
