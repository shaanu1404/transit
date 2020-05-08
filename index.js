const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'template/index.html'));
});

app.get('/generic', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'template/generic.html'));
});

app.get('/elements', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'template/elements.html'));
});

const PORT =  process.env.port || 5000;

app.listen(PORT, console.log('Server started in port ' + PORT));
