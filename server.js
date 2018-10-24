let express = require("express");
let app = express();

const PORT = 3000;

app.listen(PORT, function() {
  console.log(`Avengers assembled on Port: ${PORT}`);
});

app.get("/", function(req, res) {
  res.send("Welcome to Aveneger's Page!");
});
