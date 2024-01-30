const express = require('express');
const app = express();
const http = require('http').createServer(app);

http.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
  });