const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    static associate(models) {
      Payment.belongsTo(models.Reservation, {
        foreignKey: 'reservation_id',
      });
    }
  }
  Payment.init(
    {
      reservation_id: DataTypes.INTEGER,
      card_number: DataTypes.STRING,
      expiration_date: DataTypes.DATE,
      card_holder: DataTypes.STRING,
      amount: DataTypes.DECIMAL(10, 2),
    },
    {
      sequelize,
      modelName: 'Payment',
    }
  );
  return Payment;
};
