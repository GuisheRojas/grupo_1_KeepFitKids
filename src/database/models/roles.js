module.exports = (sequelize, dataTypes) => {
  let alias = "Roles";
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
  };
  let config = {
    tableName: "roles",
    timestamps: false,
  };
  const Role = sequelize.define(alias, cols, config);
  Role.associate = (models) => {
    Role.belongsToMany(models.Users, {
      as: "users",
      through: "user_roles",
      foreignKey: "id_role",
      otherKey: "id_user",
    });
  };
  return Role;
};
