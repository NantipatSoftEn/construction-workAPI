
'use strict'

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        id: {
            field: 'id',
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            field: 'name',
            type: DataTypes.STRING(191),
            primaryKey: false,
            allowNull: false,
            autoIncrement: false,
        },
        lastname: {
            field: 'lastname',
            type: DataTypes.STRING(191),
            primaryKey: false,
            allowNull: false,
        },
        telephone: {
            field: 'telephone',
            type: DataTypes.STRING(191),
            primaryKey: false,
            allowNull: true,
        },
        gender: {
            field: 'gender',
            type: DataTypes.ENUM('male', 'female'),
            allowNull: false,
        },
        age: {
            field: 'age',
            type: DataTypes.INTEGER(11),
            primaryKey: false,
            allowNull:false,
        },
        // ProductId: {
        //     field: 'symptom_id',
        //     type: DataTypes.INTEGER(10).UNSIGNED,
        //     primaryKey: true,
        //     allowNull: false ,
        // },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
            primaryKey: false,

        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
            primaryKey: false,
            autoIncrement: false,
        },
    });


}