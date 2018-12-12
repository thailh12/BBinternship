const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
require('./models/Articles');

app.use(cors());
mongoose.connect(
  config.db,
  { useNewUrlParser: true }
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/check', (req, res) => res.send('OK'));
app.use(require('./routers'));

app.listen(8000, () => console.log('Server started '));
