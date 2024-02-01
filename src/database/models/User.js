module.exports = (sequelize, dataTypes) => {
    const alias = 'users';
    const cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(60),
            allowNull: false
        },
        id_roles: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            allowNull: false
        },
        id_images: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        }
    };
    const config = {
        tableName: 'users',
        timestamps: false
    };
    
    
    const User = sequelize.define(alias, cols, config);




    return User;
}