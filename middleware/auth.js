const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");


module.exports = {

  async verifyToken(req, res, next) {
   
      try {
        const token = req.header("Authorization").replace("Bearer ", "");
        const user = jwt.verify(token, JWT_SECRET);

        req.user = user;
        next();
      } 
     catch (error) {
      next(error);
    
  }}}