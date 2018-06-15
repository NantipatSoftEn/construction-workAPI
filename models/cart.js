'use strict'

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('cart', {
        id: {   
            field: 'id',
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        productId:{
            field: 'product_id',
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: false,
            references: {
                model: "products",
                key: "id"
            }
        },
        count:{
            field: 'image',
            type: DataTypes.INTEGER(10),
            primaryKey: false,
            autoIncrement: false,
        },
        checkOut:{
            field: 'checkout',
            type: DataTypes.INTEGER(1),
            primaryKey: false,
            autoIncrement: false,
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
            primaryKey: false,
            autoIncrement: false,
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
            primaryKey: false,
            autoIncrement: false,
        },
    });
}