let express = require("express");
let path = require("path");
let app = express();

const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let characters = [
  {
    routeName: "captainaamerica",
    name: "Captain America",
    role: "Saving the world",
    age: 100,
    strengthPoints: 1000
  },
  {
    routeName: "thor",
    name: "Thor",
    role: "Breaking things",
    age: 50,
    strengthPoints: 10000
  },
  {
    routeName: "drstrange",
    name: "Dr. Strange",
    role: "Master of the time",
    age: 65,
    strengthPoints: 400
  }
];

app.listen(PORT, function() {
  console.log(`Avengers assembled on Port: ${PORT}`);
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/api/v1/characters", function(req, res) {
  return res.json(characters);
});

app.get("/api/v1/characters/:characterId", function(req, res) {
  let characterId = req.params.characterId;
  console.log(characterId);

  // What does this code do?
  for (let i = 0; i < characters.length; i++) {
    if (characterId === characters[i].routeName) {
      return res.json(characters[i]);
    }
  }

  // What does this code do?
  return res.json(false);
});

// Create New Characters - takes in JSON input
app.post("/api/v1/characters", function(req, res) {
  let newCharacter = req.body;

  console.log(newCharacter);

  characters.push(newCharacter);

  res.json(newCharacter);
});
