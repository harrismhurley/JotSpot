const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const { v4: uuid } = require('uuid');
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serves static files from the public folder
app.use(express.static('public'));

// Use the routes in routes/index.js
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Use the routes in routes/notes.js
const notesRouter = require('./routes/notes');
app.use('/api/notes', notesRouter);

// Server listener
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });