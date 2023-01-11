const createHttpError = require('http-errors');
const { Op } = require('sequelize');
const { endpointResponse } = require('../helpers/success');
const { catchAsync } = require('../helpers/catchAsync');
const { ErrorObject } = require('../helpers/error');

const { Room, Reservation } = require('../database/models');

module.exports = {
  browse: catchAsync(async (req, res, next) => {
    try {
      const response = await Reservation.findAll();
      endpointResponse({
        res,
        message: 'Found all reservations successfully',
        body: response,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode || 500,
        `[Error  getting reservations] - [index - GET]: ${error.message}`
      );
      next(httpError);
    }
  }),
  read: catchAsync(async (req, res, next) => {
    const { id } = req.params;
    try {
      const response = await Reservation.findByPk(id, {
        include: {
          model: Room,
        },
      });

      if (!response)
        throw new ErrorObject('The reservation has not been found.', 404);

      endpointResponse({
        res,
        message: 'Reservation retrieved successfully',
        body: response,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode || 500,
        `[Error retrieving Reservation] - [index - GET]: ${error.message}`
      );
      next(httpError);
    }
  }),
  create: catchAsync(async (req, res, next) => {
    try {
      const response = await Reservation.create(req.body);
      endpointResponse({
        res,
        message: 'Reservation created successfully',
        body: response,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode || 500,
        `[Error creating category] - [Reservations - POST]: ${error.message}`
      );
      next(httpError);
    }
  }),
  update: catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const reservation = await Reservation.findByPk(id);

    if (!reservation) throw new ErrorObject('Reservation not found', 404);

    try {
      const response = await reservation.update(req.body);
      endpointResponse({
        res,
        message: 'Reservation update successfully',
        body: response,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode || 500,
        `[Error updating Reservation] - [index - POST]: ${error.message}`
      );
      next(httpError);
    }
  }),
  remove: catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const reservation = await Reservation.findOne({
      where: {
        id,
        state: {
          [Op.not]: 'CANCELLED',
        },
      },
    });

    if (!reservation)
      throw new ErrorObject('Reservation not found or already cancelled.', 404);

    try {
      const response = await reservation.update({
        state: 'CANCELLED',
      });
      endpointResponse({
        res,
        message: 'Reservation cancelled successfully',
        body: response,
      });
    } catch (error) {
      console.log(error);
      const httpError = createHttpError(
        error.statusCode || 500,
        `[Error cancelling Reservation] - [index - POST]: ${error.message}`
      );
      next(httpError);
    }
  }),
  pay: catchAsync(async (req, res, next) => {
    /* eslint-disable camelcase */
    const { id } = req.params;
    const { payment_method, amount_paid } = req.body;

    const reservation = await Reservation.findOne({
      where: {
        id,
        state: {
          [Op.not]: 'PAID',
        },
      },
    });

    if (!reservation)
      throw new ErrorObject('Reservation not found or already paid.', 404);

    try {
      const response = await reservation.update({
        state: 'PAID',
        payment_method,
        amount_paid,
      });
      endpointResponse({
        res,
        message: 'Reservation paid successfully',
        body: response,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode || 500,
        `[Error paying Reservation] - [index - POST]: ${error.message}`
      );
      next(httpError);
    }
  }),
};
