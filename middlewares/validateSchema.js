function validateSchema(ajvValidate) {
  /* eslint-disable consistent-return */
  return (req, res, next) => {
    const isValid = ajvValidate(req.body);
    if (!isValid) {
      const { errors } = ajvValidate;
      return res.status(400).json(errors);
    }
    next();
  };
}

module.exports = validateSchema;
