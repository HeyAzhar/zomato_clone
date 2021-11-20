exports.validator = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body);

    next();
  } catch (error) {
    if (error?.details[0]?.message)
      return res.status(401).send({
        success: false,
        message: error.details[0].message,
      });

    res.status(409).send({
      success: false,
      message: "Something went wrong",
    });
  }
};
