module.exports = (sequelize, dataTypes) => {
  let alias = "User_roles";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_user: {
      type: dataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
    id_role: {
      type: dataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "roles",
        key: "id",
      },
    },
  };
  let config = {
    tableName: "user_roles",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  };
  const User_role = sequelize.define(alias, cols, config);
  return User_role;
};
