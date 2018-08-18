var express = require('express');
var Resource = require('express-resource')
// var router = express.Router();
var app = express();

var articleServices = require('../service/articleService');
var cartServices = require('../service/cartService');
var productServices = require('../service/productService');
var projectServices = require('../service/projectService');
var userServices = require('../service/userService');

app.resource('article', articleServices);
app.resource('cart', cartServices);
app.resource('product', productServices);
app.resource('project', projectServices);
app.resource('user', userServices);

module.exports = app;