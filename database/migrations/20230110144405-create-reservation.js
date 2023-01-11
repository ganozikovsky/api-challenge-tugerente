/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reservations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      state: {
        type: Sequelize.ENUM('PENDING', 'PAID', 'CANCELLED'),
        defaultValue: 'PENDING',
      },
      room_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      checkin_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      checkout_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      billing_info: {
        type: Sequelize.JSON,
      },
      client_info: {
        type: Sequelize.JSON,
      },
      amount_paid: {
        type: Sequelize.DECIMAL(10, 2),
      },
      payment_method: {
        type: Sequelize.ENUM(
          'CREDIT_CARD',
          'DEBIT_CARD',
          'CASH',
          'BANK_TRANSFER'
        ),
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Reservations');
  },
};
