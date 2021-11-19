const jwt = require("jsonwebtoken");

exports.isAuthentocated = (req, res, next) => {
  try {
    const decoded = jwt.verify(req.headers.token, "SECRETTTTTT");

    if (!decoded)
      return res.status(403).send({
        success: false,
        message: "Unauthorised",
      });

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(403).send({
      success: false,
      message: "Unauthorised",
    });
  }
};
