module.exports = (sequelize, dataTypes) => {
  let alias = "Users";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    first_name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    avatar: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: dataTypes.DATE,
      allowNull: false,
      field: "created_at",
    },
    updatedAt: {
      type: dataTypes.DATE,
      allowNull: false,
      field: "updated_at",
    },
  };
  let config = {
    tableName: "users",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  };
  const User = sequelize.define(alias, cols, config);
  User.associate = (models) => {
    User.belongsToMany(models.Roles, {
      as: "roles",
      through: "user_roles",
      foreignKey: "id_user",
      otherKey: "id_role",
    });
    User.hasMany(models.Shopping_carts, {
      foreignKey: "id_user",
      as: "Users",
    });
    User.belongsToMany(models.Products, {
      as: "user_product",
      through: "user_products",
      foreignKey: "id_user",
      otherKey: "id_product",
    });
  };
  return User;
};
