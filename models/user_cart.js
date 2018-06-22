
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
        userId: {
            field: 'user_id',
            type: DataTypes.STRING(191),
            primaryKey: false,
            allowNull: true,
            autoIncrement: false,
            references: {
                model: "users",
                key: "id"
            }
        },
        cartId: {
            field: 'cart_id',
            type: DataTypes.STRING(191),
            primaryKey: true,
            allowNull: false,
            autoIncrement: false,
            references: {
                model: "carts",
                key: "id"
            }
        },
    });


}