const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const dbPath = path.join(__dirname, '../db/db.json');

// Function to read from JSON 
const readNote = () => {
    const data = fs.readFileSync(dbPath, 'utf8');
    return JSON.parse(data);
};

// Function to write to JSON 
const writeNote = (notes) => {
    fs.writeFileSync(dbPath, JSON.stringify(notes, null, 2));
};

// GET route to retrieve notes
router.get('/', (req, res) => {
    const notes = readNote();
    res.json(notes);
});

// POST route to save new note
router.post('/', (req, res) => {
    const notes = readNote();
    const newNote = {
        id: Date.now().toString(),
        title: req.body.title,
        text: req.body.text,
    };
    notes.push(newNote);
    writeNote(notes);
    res.json(newNote);
});

// DELETE route for deleting note 
router.delete('/:id', (req, res) => {
    let notes = readNote();
    notes = notes.filter(note => note.id !== req.params.id);
    writeNote(notes);
    res.json({ message: 'Note deleted' });
});

module.exports = router;