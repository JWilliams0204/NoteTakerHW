const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

let everyNote = [];

app.get("/api/notes", function(req, res){
    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) throw err;
      everyNote = JSON.parse(data);  
    } 

)
res.json(everyNote);
})

app.post("/api/notes", function(req, res){
  everyNote = fs.readFileSync("./db/db.json", "utf8")
        everyNote = JSON.parse(everyNote);
        req.body.id = everyNote.length;
        everyNote.push(req.body);
        
        everyNote = JSON.stringify(everyNote) 
    
    fs.writeFileSync("./db/db.json", everyNote, "utf8")
        res.json(JSON.parse(everyNote));  
})

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "public/index.html"))
})
app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "public/notes.html"))
})

app.delete("/api/notes", function(req, res){
    everyNote = fs.readFile("./db/db.json", "utf8")
    res.json(JSON.parse(everyNote));
})
app.listen(PORT, function(){
    console.log("server is listening on: http://localhost:" + PORT )
})