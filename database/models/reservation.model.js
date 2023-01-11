const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    static associate(models) {
      Reservation.belongsTo(models.Room, {
        foreignKey: 'room_id',
      });
    }
  }
  Reservation.init(
    {
      state: DataTypes.ENUM('PENDING', 'PAID', 'CANCELLED'),
      room_id: DataTypes.INTEGER,
      checkin_date: DataTypes.DATE,
      checkout_date: DataTypes.DATE,
      total_amount: DataTypes.DECIMAL(10, 2),
    },
    {
      sequelize,
      modelName: 'Reservation',
    }
  );
  return Reservation;
};
