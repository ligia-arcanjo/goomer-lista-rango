const express = require('express');
const restaurantRoutes = require('./routes/restaurantRoutes');

const app = express();

app.use(express.json());

app.use('/restaurant', restaurantRoutes);

module.exports = app;
