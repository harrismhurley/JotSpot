const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const { v4: uuid } = require('uuid');
const PORT = process.env.PORT || 3001;


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });