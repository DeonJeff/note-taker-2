const router = require("express").Router();

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