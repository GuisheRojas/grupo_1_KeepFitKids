module.exports = (sequelize, dataTypes) => {
    let alias = 'User_roles';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          }
    };
    let config = {
        tableName: 'user_roles',
        timestamps: true
    };
    const User_role = sequelize.define(alias, cols, config)
    
    return User_role
}