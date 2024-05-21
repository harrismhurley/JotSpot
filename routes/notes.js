const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const dbPath = path.join(__dirname, '../db/db.json');

// Function to read from JSON 
const readNotes = () => {
    const data = fs.readFileSync(dbPath, 'utf8');
    return JSON.parse(data);
  };
  
  // Function to write to JSON 
  const writeNotes = (notes) => {
    fs.writeFileSync(dbPath, JSON.stringify(notes, null, 2));
  };

  module.exports = router;