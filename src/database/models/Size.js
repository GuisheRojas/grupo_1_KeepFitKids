module.exports = (sequelize, dataTypes) => {
    const alias = 'sizes';
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
        tableName: 'sizes',
        timestamps: false
    };
    
    const Size = sequelize.define(alias, cols, config);




    return Size
}