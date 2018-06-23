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
sequelize.sync()
const op = Sequelize.Op;

const model = {};
model.Sequelize = Sequelize;
model.sequelize = sequelize;
model.op = op;

model.article =  require('../models/article')(sequelize, Sequelize);
model.cart =  require('../models/cart')(sequelize, Sequelize);
model.product =  require('../models/product')(sequelize, Sequelize);
model.project =  require('../models/project')(sequelize, Sequelize);
model.users=  require('../models/user')(sequelize, Sequelize);

model.cart.belongsTo(model.product);
model.product.hasMany(model.cart); // take userId to reseration

module.exports = model;