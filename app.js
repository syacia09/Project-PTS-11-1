const express = require("express");
const { engine } = require("express-handlebars"); // Ubah ini
const app = express();

// Set Handlebars sebagai templating engine
app.engine("hbs", engine({ extname: "hbs" })); // Gunakan engine dari express-handlebars
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
