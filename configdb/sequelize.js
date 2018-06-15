'use strict';
const config = require('./config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.server, config.username, config.password, {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: true
    },
});

const op = Sequelize.Op;

const model = {};
model.Sequelize = Sequelize;
model.sequelize = sequelize;
model.op = op;
sequelize.sync()
    .then(() => model.article.create({
        id: '',
        title: 'header title',
        image: 'img64bit',
        des:'dfdsfsdfsdfdsgfdg',
        createdAt: '',
        updatedAt: ''
    }))
    .then(() => model.product.create({
      id: '',
      name: 'yeddsdf',
      type: 1,
      des: 'asdadad',
      price:200,
      createdAt: '',
      updatedAt: ''
  }))
    .then(() => model.cart.create({
        id: '',
        productId: 1,
        count: 2,
        checkOut: 1,
        createdAt: '',
        updatedAt: ''
    }))

    .then(() => model.project.create({
        id: '',
        name: 'asdsadsa',
        type: 1,
        createdAt: '',
        updatedAt: ''
    }))

model.article =  require('../models/article')(sequelize, Sequelize);
model.cart =  require('../models/cart')(sequelize, Sequelize);
model.product =  require('../models/product')(sequelize, Sequelize);
model.project =  require('../models/project')(sequelize, Sequelize);

model.cart.hasMany(model.product);
model.product.belongsTo(model.cart)
module.exports = model;