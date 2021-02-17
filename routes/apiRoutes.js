const fs = require("fs");
const noteData = require("../db/db.json");

module.exports = (app) => {
  // the GET api
  app.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
      if (err) throw err;
      res.json(JSON.parse(data));
    });
  });

  // the POST api
  app.post("/api/notes", (req, res) => {
    let newNote = {
      title: req.body.title,
      text: req.body.text,
    };
    newNote.id = Math.floor(Math.random() * 1000000000);

    fs.readFile("./db/db.json", "utf-8", (err, notesData) => {
      if (err) {
        throw err;
      }

      let notesInfo = JSON.parse(notesData);
      notesInfo.push(newNote);

      fs.writeFile(
        "./db/db.json",
        JSON.stringify(notesInfo, null, 2),
        (err) => {
          if (err) throw err;
          res.send(notesInfo);
        }
      );
    });
  });

  // the DELETE api
  app.delete("/api/notes/:id", (req, res) => {
    let id = req.params.id;

    fs.readFile("./db/db.json", "utf-8", (err, notesInfo) => {
      let note = JSON.parse(notesInfo);
      let newNotesInfo = note.filter((note) => note.id != id);
      fs.writeFile(
        "./db/db.json",
        JSON.stringify(newNotesInfo, null, 2),
        (err) => {
          if (err) throw err;
          res.send(newNotesInfo);
        }
      );
    });
  });
};