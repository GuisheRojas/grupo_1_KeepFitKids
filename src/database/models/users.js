module.exports = (sequelize, dataTypes) => {
    let alias = 'Users';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          name: {
            type: dataTypes.STRING,
            allowNull: false
          },
          first_name: {
            type: dataTypes.STRING,
            allowNull: false
          },
          last_name: {
            type: dataTypes.STRING,
            allowNull: false
          },
          email: {
            type: dataTypes.STRING,
            allowNull: false
          },
          password: {
            type: dataTypes.STRING,
            allowNull: false
          },
          avatar: {
            type: dataTypes.STRING,
            allowNull: false
          }
    };
    let config = {
        tableName: 'users',
        timestamps: true
    };
    const User = sequelize.define(alias, cols, config)
    User.associate = (models)=>{
        User.belongsToMany(models.Roles, {
            as: 'user_roles',
            through: 'User_roles',
            foreignKey: 'id_user',
            otherKey: 'id_role'            
        })
        User.hasMany(models.Shopping_carts, {
          foreignKey: 'id_user',
          as: 'Users'
        })
        User.belongsToMany(models.Products, {
          as: 'user_products',
          through: 'User_products',
          foreignKey: 'id_user',
          otherKey: 'id_product'
        })
    }
    return User
}