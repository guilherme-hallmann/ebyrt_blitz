module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    'Task',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      content: { type: DataTypes.STRING, allowNull: false },
      status: { type: DataTypes.STRING, allowNull: false },
      userId: { type: DataTypes.INTEGER },
    },
  );

  Task.associate = ({ User }) => {
    Task.belongsTo(User, {
      as: 'user',
      foreignKey: 'userId',
    });
  };
  return Task;
};
