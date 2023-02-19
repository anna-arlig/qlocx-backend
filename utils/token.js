const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const createToken = ( id) => {
  const newUser = {
    id: id,
  };
  const token = jwt.sign(newUser, JWT_SECRET, { expiresIn: "1d" });
  return token;
};


module.exports = { createToken };