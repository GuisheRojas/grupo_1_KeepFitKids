module.exports = (sequelize, dataTypes) => {
    let alias = 'Sizes';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
        type: DataTypes.STRING,
        allowNull: false
        }
    };
    let config = {
        tableName: 'sizes',
        timestamps: false
    };
    const Size = sequelize.define(alias, cols, config)
   
    return Size
}