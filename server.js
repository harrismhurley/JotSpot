const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const PORT = process.env.PORT || 3001;

// Middleware for JSON and encoding
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static file from public
app.use(express.static('public'));

// Use routes in routes/index.js
const indexRoute = require('./routes/index');
app.use('/', indexRoute);

// Use routes in routes/notes.js
const notesRoute = require('./routes/notes');
app.use('/api/notes', notesRoute);

// Server listener
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});