module.exports = (sequelize, dataTypes) => {
    const alias = 'buys';
    const cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false
        },
        items_amount: {
            type: dataTypes.TINYINT(255).UNSIGNED,
            allowNull: false
        },
        total_price: {
            type: dataTypes.FLOAT(8,2).UNSIGNED,
            allowNull: false
        },
        operation_date: {
            type: dataTypes.DATE,
            allowNull: false
        },
        id_user: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        id_product: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        }
    };
    const config = {
        tableName: 'buys',
        timestamps: false
    };
    
    const Buy = sequelize.define(alias, cols, config);




    return Buy;
}