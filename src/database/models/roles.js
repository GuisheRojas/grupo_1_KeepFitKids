module.exports = (sequelize, dataTypes) => {
    let alias = 'Roles';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          name: {
            type:DataTypes.STRING,
            allowNull: false
          }
    };
    let config = {
        tableName: 'roles',
        timestamps: true
    };
    const Role = sequelize.define(alias, cols, config)
    
    return Role
}