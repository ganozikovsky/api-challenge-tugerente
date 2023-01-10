const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
