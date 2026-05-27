const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

// Serve cac file static tu thu muc public
app.use(express.static(path.join(__dirname, 'src/public')));

// Route chinh - redirect ve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/public', 'index.html'));
});

// Cac route chi tien (about, etc)
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/public', 'about.html'));
});

// Xu ly 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'src/public', 'index.html'));
});

// Khoi dong server
app.listen(PORT, () => {
  console.log(`Server dang chay tren http://localhost:${PORT}`);
});
