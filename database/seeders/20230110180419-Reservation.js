/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Reservations',
      [
        {
          state: 'PAID',
          room_id: 1,
          checkin_date: '2022-12-01',
          checkout_date: '2022-12-05',
          billing_info: JSON.stringify({
            name: 'Gonzalo Nozikovsky',
            city: 'Cordoba',
            country: 'AR',
          }),
          client_info: JSON.stringify({
            email: 'ganozikovsky@gmail.com',
            phone: '555-555-5555',
          }),
          amount_paid: 287,
          payment_method: 'CREDIT_CARD',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          state: 'PAID',
          room_id: 2,
          checkin_date: '2022-12-05',
          checkout_date: '2022-12-12',
          billing_info: JSON.stringify({
            name: 'Juan Perez',
            city: 'Buenos Aires',
            country: 'AR',
          }),
          client_info: JSON.stringify({
            email: 'juanperez@gmail.com',
            phone: '555-555-5555',
          }),
          amount_paid: 250,
          payment_method: 'DEBIT_CARD',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          state: 'PENDING',
          room_id: 3,
          checkin_date: '2022-12-04',
          checkout_date: '2022-12-13',
          billing_info: JSON.stringify({
            name: 'Luz Paris',
            city: 'Buenos Aires',
            country: 'AR',
          }),
          client_info: JSON.stringify({
            email: 'luzparis@gmail.com',
            phone: '555-555-5555',
          }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          state: 'CANCELLED',
          room_id: 4,
          checkin_date: '2022-12-04',
          checkout_date: '2022-12-13',
          billing_info: JSON.stringify({
            name: 'Damian Cordoba',
            city: 'Buenos Aires',
            country: 'AR',
          }),
          client_info: JSON.stringify({
            email: 'damiancordoba@gmail.com',
            phone: '555-555-5555',
          }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          state: 'PENDING',
          room_id: 5,
          checkin_date: '2022-12-04',
          checkout_date: '2022-12-13',
          billing_info: JSON.stringify({
            name: 'Ulises Bueno',
            city: 'Buenos Aires',
            country: 'AR',
          }),
          client_info: JSON.stringify({
            email: 'ulises@gmail.com',
            phone: '555-555-5555',
          }),
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
