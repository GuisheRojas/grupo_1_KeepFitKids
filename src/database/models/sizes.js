module.exports = (sequelize, dataTypes) => {
    let alias = 'Sizes';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
        type: dataTypes.STRING,
        allowNull: false
        }
    };
    let config = {
        tableName: 'sizes',
        timestamps: false
    };
    const Size = sequelize.define(alias, cols, config)
    Size.associate = (models) => {
        Size.hasMany(models.Stock, {
            foreignKey: 'id_size',
            as: 'Sizes'            
        })
    }
    return Size
}