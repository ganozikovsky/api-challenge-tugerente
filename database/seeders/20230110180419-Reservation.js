/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Reservations',
      [
        {
          state: 'PAID',
          room_id: 1,
          checkin_date: new Date(),
          checkout_date: new Date(),
          total_amount: 287,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          state: 'PAID',
          room_id: 2,
          checkin_date: new Date(),
          checkout_date: new Date(),
          total_amount: 354,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          room_id: 3,
          checkin_date: new Date(),
          checkout_date: new Date(),
          total_amount: 351,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          room_id: 4,
          checkin_date: new Date(),
          checkout_date: new Date(),
          total_amount: 112,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          room_id: 5,
          checkin_date: new Date(),
          checkout_date: new Date(),
          total_amount: 142,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Reservations', null, {});
  },
};
