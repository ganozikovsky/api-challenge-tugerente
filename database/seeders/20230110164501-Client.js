/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Clients',
      [
        {
          firstName: 'Gonzalo',
          lastName: 'Nozikovsky',
          email: 'ganozikovsky@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Lionel',
          lastName: 'Messi',
          email: 'leomessi@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Emiliano',
          lastName: 'Martinez',
          email: 'emilianomartinez@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Lautaro',
          lastName: 'Martinez',
          email: 'lautaromartinez@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Gonzalo',
          lastName: 'Martinez',
          email: 'gonzalomartinez@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Mariano',
          lastName: 'Andujar',
          email: 'marianoandujar@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Baltasar',
          lastName: 'Cogorno',
          email: 'baltasarcogorno@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Clients', null, {});
  },
};
