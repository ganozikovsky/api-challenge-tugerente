const ajvInstance = require('./ajv-instance');

const createSchema = {
  type: 'object',
  properties: {
    room_id: {
      type: 'integer',
      minimum: 1,
    },
    checkin_date: {
      type: 'string',
      format: 'date',
    },
    checkout_date: {
      type: 'string',
      format: 'date',
    },
    billing_info: {
      type: 'object',
      required: ['name', 'city', 'country'],
      properties: {
        name: {
          type: 'string',
        },
        city: {
          type: 'string',
        },
        country: {
          type: 'string',
        },
      },
    },
    client_info: {
      type: 'object',
      required: ['email', 'phone'],
      properties: {
        email: {
          type: 'string',
          format: 'email',
        },
        phone: {
          type: 'string',
        },
      },
    },
  },
  required: [
    'room_id',
    'checkin_date',
    'checkout_date',
    'billing_info',
    'client_info',
  ],
  additionalProperties: false,
};

const putSchema = {
  type: 'object',
  properties: {
    room_id: {
      type: 'integer',
      minimum: 1,
    },
    checkin_date: {
      type: 'string',
      format: 'date',
    },
    checkout_date: {
      type: 'string',
      format: 'date',
    },
    billing_info: {
      type: 'object',
      required: ['name', 'city', 'country'],
      properties: {
        name: {
          type: 'string',
        },
        city: {
          type: 'string',
        },
        country: {
          type: 'string',
        },
      },
    },
    client_info: {
      type: 'object',
      required: ['email', 'phone'],
      properties: {
        email: {
          type: 'string',
          format: 'email',
        },
        phone: {
          type: 'string',
        },
      },
    },
  },
  additionalProperties: false,
};

const paymentSchema = {
  type: 'object',
  properties: {
    payment_method: {
      type: 'string',
      enum: ['CREDIT_CARD', 'DEBIT_CARD', 'BANK_TRANSFER', 'CASH'],
    },
    amount_paid: {
      type: 'string',
      pattern: '^[0-9]+(.[0-9]{1,2})?$',
    },
  },
  required: ['payment_method', 'amount_paid'],
  additionalProperties: false,
};

const validateCreateReservation = ajvInstance.compile(createSchema);
const validateUpdateReservation = ajvInstance.compile(putSchema);
const validatePaymentReservation = ajvInstance.compile(paymentSchema);

module.exports = {
  validateCreateReservation,
  validateUpdateReservation,
  validatePaymentReservation,
};
