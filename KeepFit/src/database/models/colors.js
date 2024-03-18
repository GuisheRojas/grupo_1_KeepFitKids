module.exports = (sequelize, dataTypes) => {
    let alias = 'Colors';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          name:{
            type: dataTypes.STRING,
            allowNull: false
          }
    };
    let config = {
        tableName: 'colors',
        timestamps: false
    };
    const Color = sequelize.define(alias, cols, config)
    Color.associate = (models) => {
      Color.hasMany(models.Stock, {
        foreignKey: 'id_color',
        as: 'colors_stock'
    })
    }
    return Color
}