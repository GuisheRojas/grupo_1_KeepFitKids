module.exports = (sequelize, dataTypes) => {
    const alias = 'colors';
    const cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(15),
            allowNull: false
        }
    };
    const config = {
        tableName: 'colors',
        timestamps: false
    };
    
    const Color = sequelize.define(alias, cols, config);





    return Color;
}