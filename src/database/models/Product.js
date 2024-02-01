module.exports = (sequelize, dataTypes) => {
    const alias = 'products';
    const cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(200),
            allowNull: false
        },
        price: {
            type: dataTypes.FLOAT(6,2).UNSIGNED,
            allowNull: false
        },
        stock: {
            type: dataTypes.TINYINT(255).UNSIGNED,
            allowNull: false
        },
        genre: {
            type: dataTypes.STRING(10),
            allowNull: false
        },
        new: {
            type: dataTypes.TINYINT(1).UNSIGNED,
            allowNull: false
        },
        id_images: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
        }
    };
    const config = {
        tableName: 'products',
        timestamps: false
    };

    const Product = sequelize.define(alias, cols, config);




    return Product;
}