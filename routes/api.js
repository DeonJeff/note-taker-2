const router = require("express").Router();
const path = require("path");

router.get("/api/notes", (req, res) => {
    res.json(notes);
});

router.post("/api/notes", (req, res) => {
    
 let newNote = req.body;
    notes.push(newNote);
      updateDb();
       return console.log("New note: " +newNote.title);
 });

    module.exports = router;