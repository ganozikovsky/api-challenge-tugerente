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
      checkin_date: DataTypes.DATEONLY,
      checkout_date: DataTypes.DATEONLY,
      billing_info: DataTypes.JSON,
      client_info: DataTypes.JSON,
      amount_paid: DataTypes.DECIMAL(10, 2),
      payment_method: DataTypes.ENUM(
        'CREDIT_CARD',
        'DEBIT_CARD',
        'CASH',
        'BANK_TRANSFER'
      ),
    },
    {
      sequelize,
      modelName: 'Reservation',
    }
  );
  return Reservation;
};
