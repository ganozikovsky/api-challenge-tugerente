const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    static associate(models) {
      Room.hasMany(models.Reservation);
    }
  }
  Room.init(
    {
      number: DataTypes.INTEGER,
      description: DataTypes.STRING,
      price: DataTypes.DECIMAL(10, 2),
    },
    {
      sequelize,
      modelName: 'Room',
    }
  );
  return Room;
};
