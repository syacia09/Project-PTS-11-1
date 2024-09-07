const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

// Set Handlebars as the default templating engine
app.engine("hbs", exphbs({ extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", "./views");

// Routes
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

// Static assets
app.use(express.static("public"));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
