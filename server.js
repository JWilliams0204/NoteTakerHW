const express = require("express");
//const path = require("path");//
const app = express();
const PORT = process.env.PORT || 3000;
const fs = require("fs");



app.use(express.urlencoded({extended: true}));
app.use(express.json());
// app.use(express.static("public"));

app.use(express.static('public'));
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

/* let everyNote = [];

 app.get("/api/notes", function(req, res){
     everyNote = fs.readFileSync("./db/db.json", "utf8")
       everyNote = JSON.parse(everyNote);  
     
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

/*app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "public/index.html"))
})
app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "public/notes.html"))
})

app.delete("/api/notes/:id", function(req, res){
    everyNote = fs.readFileSync("./db/db.json", "utf8")
        everyNote = JSON.parse(everyNote);
       everyNote= everyNote.filter(function(eachNote){
           return eachNote.id != req.params.id;
       })
        
        everyNote = JSON.stringify(everyNote) 
    
    fs.writeFileSync("./db/db.json", everyNote, "utf8")
    
    res.json(JSON.parse(everyNote));
})*/
app.listen(PORT, function(){
    console.log("server is listening on: http://localhost:" + PORT )
});