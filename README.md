# NoteTakerHW
For the Note Taker app i created a server.js file where i created 3 const that use express path and fs. I created const app that creates the express function, and a const PORT so i can call the port that i want to use for the application which is 3000. I used app.use(urlencoded({extended: true})), app.use(express.json()), and app.use(express.static("public")) to return the middleware that parses between json and urlencoded. I then created let everyNote array, because everytim you input a note. It becomes part of the everyNote array. After that i used app.get to to call the api and notes.html file. I used fs.readFile so that express can read the notes.html. I then used and if and throw statement for if there are any errors. After that I made everyNote = JSON.parse(data) so that the data can be constructed into a string. Res.json(everyNote), is so that the response received will be the information inputed into the everyNote array.
To be able to post i used app.post("/api/notes", function(req, res) to let express allow the user to begin posting notes. everyNote = fs.readFileSync("./db/db.json", "utf8"), so that the db.json file can begin to sync with the index, and notes.htmls. I went on to create everyNote = JSON.parse(everyNote) req.body.id = everyNote.length; everyNote.push(req.body); so the information in the everyNote array can be pushed inside it , and pushed to the notes.html. everyNote = JSON.stringify(everyNote) turns the contents in the array into a string. fs.writeFileSync("./db/db.json", everyNote, "utf8"), syncs the db.json and everyNote array. 
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "public/index.html"))
})
app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "public/notes.html"))
})

Allows express to get the index.html, and notes.html files, and creates a path for the files to combine and allow the contents to appear. Finally i used app.listen(PORT, function() with a console.log of "server is listening on: http://localhost:" + PORT ) to appear in the terminal so the user can follow the link to the website, and know which port is being used.
