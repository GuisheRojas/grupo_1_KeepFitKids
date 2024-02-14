module.exports = (sequelize, dataTypes) => {
    let alias = 'User_roles';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          }
    };
    let config = {
        tableName: 'user_roles',
        timestamps: true
    };
    const User_role = sequelize.define(alias, cols, config)
    User_role.associate = (models)=>{
        User_role.hasMany(models.Users, {
            as: 'user_role',
            foreignKey: 'id_user',       
        })
        User_role.hasMany(models.Roles, {
            as: 'user_role',
            foreignKey: 'id_role',          
        })
    }
    return User_role
}