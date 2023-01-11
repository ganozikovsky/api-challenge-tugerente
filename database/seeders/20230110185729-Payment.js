/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Payments',
      [
        {
          reservation_id: 1,
          card_number: '4556485967527962840',
          expiration_date: new Date(),
          card_holder: 'Gonzalo Nozikovsky',
          amount: 287,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          reservation_id: 2,
          card_number: '4556485967527962840',
          expiration_date: new Date(),
          card_holder: 'Gonzalo Nozikovsky',
          amount: 351,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Payments', null, {});
  },
};
