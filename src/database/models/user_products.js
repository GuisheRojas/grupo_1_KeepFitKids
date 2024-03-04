module.exports = (sequelize, dataTypes) => {
    let alias = 'User_products';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }
    };
    let config = {
        tableName: 'user_products',
        timestamps: false
    };
    const User_product = sequelize.define(alias, cols, config)
    
    return User_product
}