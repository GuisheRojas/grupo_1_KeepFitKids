module.exports = (sequelize, dataTypes) => {
    const alias = 'images';
    const cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    };
    const config = {
        tableName: 'images',
        timestamps: false
    };

    const Image = sequelize.define(alias, cols, config);




    return Image;
}