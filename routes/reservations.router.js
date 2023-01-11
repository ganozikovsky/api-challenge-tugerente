const express = require('express');
const {
  browse,
  read,
  create,
  update,
  remove,
  pay,
} = require('../controllers/reservations.controller');
const validateSchema = require('../middlewares/validateSchema');
const {
  validateCreateReservation,
  validateUpdateReservation,
  validatePaymentReservation,
} = require('../schema/reservation.validations');

const router = express.Router();

router.get('/', browse);
router.get('/:id', read);
router.post('/', validateSchema(validateCreateReservation), create);
router.put('/:id', validateSchema(validateUpdateReservation), update);
router.put('/:id/pay', validateSchema(validatePaymentReservation), pay);
router.delete('/:id', remove);

module.exports = router;
