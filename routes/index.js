var express = require('express');
var Resource = require('express-resource')
// var router = express.Router();
var app = express();

var articleServices = require('../service/articleService');
var cartServices = require('../service/cartService');
var productServices = require('../service/productService');
var projectServices = require('../service/projectService');

app.resource('article', articleServices);
app.resource('cart', cartServices);
app.resource('product', productServices);
app.resource('project', projectServices);
module.exports = app;