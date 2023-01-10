const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Reservation.belongsTo(models.Client, {
        foreignKey: 'client_id',
      });
      Reservation.belongsTo(models.Room, {
        foreignKey: 'room_id',
      });
      Reservation.hasOne(models.Payment, {
        foreignKey: 'payment_id',
      });
    }
  }
  Reservation.init(
    {
      state: DataTypes.ENUM('PENDING', 'PAID', 'CANCELLED'),
      room_id: DataTypes.INTEGER,
      client_id: DataTypes.INTEGER,
      checkin_date: DataTypes.DATE,
      checkout_date: DataTypes.DATE,
      total_amount: DataTypes.DECIMAL(10, 2),
      payment_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Reservation',
    }
  );
  return Reservation;
};
