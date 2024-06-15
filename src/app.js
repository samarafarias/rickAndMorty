const express = require('express');
const app = express();
const characterRoutes = require('./routes/characterRoutes');

app.use('/characters', characterRoutes);

module.exports = app;
