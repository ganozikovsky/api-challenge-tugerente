/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Rooms',
      [
        {
          number: 101,
          description:
            'Habitación estándar cómoda con cama matrimonial, TV y baño privado con artículos de aseo gratuitos. Vistas a la ciudad y Wi-Fi gratuito.',
          price: 78.5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          number: 102,
          description:
            'Habitación Premium con cama king, minibar, balcón con vistas al mar, baño de lujo. Acceso a piscina exclusiva y servicio de conserjería las 24 horas.',
          price: 120,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          number: 103,
          description:
            'Habitación Suite con cama king, salón independiente, baño con bañera de hidromasaje, balcón con vistas al jardín. Servicio de mayordomo las 24 horas.',
          price: 155.5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          number: 104,
          description:
            'Habitación Family Suite con dos habitaciones separadas, tres camas dobles, un pequeño salón y un baño privado con bañera. Ideal para familias y grupos de amigos, con vistas al parque cercano.',
          price: 98.5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          number: 105,
          description:
            'Habitación Studio con cama queen, cocina equipada, baño privado, y una pequeña terraza con vistas a la ciudad. Ideal para viajes de negocios o largas estadías.',
          price: 167.5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Rooms', null, {});
  },
};
