module.exports = (sequelize, dataTypes) => {
    let alias = 'Users';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false
          },
          first_name: {
            type: DataTypes.STRING,
            allowNull: false
          },
          last_name: {
            type: DataTypes.STRING,
            allowNull: false
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false
          },
          avatar: {
            type: DataTypes.STRING,
            allowNull: false
          }
    };
    let config = {
        tableName: 'sizes',
        timestamps: true
    };
    const User = sequelize.define(alias, cols, config)
    User.associate = (models)=>{
        User.belongsToMany(models.Roles, {
            as: 'user_role',
            through: 'user_roles',
            foreignKey: 'id_user',
            otherKey: 'id_role'            
        })
    }
    return User
}