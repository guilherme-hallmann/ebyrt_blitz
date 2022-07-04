module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false },
    },
    {
      timestamps: false,
    },
  );

  User.associate = ({ Task }) => {
    User.hasMany(Task, {
      as: 'task',
      foreignKey: 'userId',
    });
  };
  return User;
};
