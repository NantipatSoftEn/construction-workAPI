module.exports = (sequelize, DataTypes) => {
    const admin = sequelize.define('admin', {
        username: {
            type: DataTypes.STRING
        },
        passwordHash: {
            type: DataTypes.STRING
        }
        
    }, {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    })


    return admin;
}