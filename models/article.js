'use strict'

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('article', {
        id: {
            field: 'id',
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        title:{
            field: 'title',
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
        des:{
            field: 'des',
            type: DataTypes.STRING(191),
            primaryKey: false,
            autoIncrement: false,
        },
        typeArticle:{
            field: 'type_article',
            type: DataTypes.STRING(191),
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