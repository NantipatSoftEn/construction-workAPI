'use strict'

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('product', {
        id: {
            field: 'id',
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name:{
            field: 'name',
            type: DataTypes.STRING(191),
            primaryKey: false,
            autoIncrement: false,
        },
        image:{
            field: 'image',
            type: DataTypes.STRING(191),
            primaryKey: false,
            autoIncrement: false,
        },
        type:{
            field: 'type',
            type: DataTypes.INTEGER(1),
            primaryKey: false,
            autoIncrement: false,
        },
        des:{
            field: 'des',
            type: DataTypes.STRING(191),
            primaryKey: false,
            autoIncrement: false,
        },
        price:{
            field: 'price',
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