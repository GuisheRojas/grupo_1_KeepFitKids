module.exports = (sequelize, dataTypes) => {
    const alias = 'roles';
    const cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(10),
            allowNull: false
        }
    };
    const config = {
        tableName: 'roles',
        timestamps: false
    };
    
    const Role = sequelize.define(alias, cols, config);




    return Role;
}