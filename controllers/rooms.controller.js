const createHttpError = require('http-errors');
const { endpointResponse } = require('../helpers/success');
const { catchAsync } = require('../helpers/catchAsync');

const { Room } = require('../database/models');

module.exports = {
  browse: catchAsync(async (req, res, next) => {
    try {
      const response = await Room.findAll();
      endpointResponse({
        res,
        message: 'Found all rooms successfully',
        body: response,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode || 500,
        `[Error  getting rooms] - [index - GET]: ${error.message}`
      );
      next(httpError);
    }
  }),
};
