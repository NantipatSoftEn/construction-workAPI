var express = require('express');
var Resource = require('express-resource')
// var router = express.Router();
var app = express();
var articleServices = require('../service/articleService');

app.resource('article', articleServices);

module.exports = app;
