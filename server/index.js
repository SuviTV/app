require('dotenv').config();
const express = require('express');
const session = require('express-session');
const decorators = require('./decorators');

const app = express();
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

decorators.decorate(app);