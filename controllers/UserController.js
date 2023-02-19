const user = {id: 1337, name: 'Anna Ärlig', email: 'anna.arlig@gmail.com', phone: '0730409156', password: 'Qlocx2016'}
const Token = require("../utils/token");

module.exports = {

  auth: (req, res, next) => {
    try {
      const { email, password } = req.body;
      const isMatch = email === user.email && password === user.password;
      if (isMatch) {
        const token = Token.createToken(
          user.id
        );
        res.json({ token });
      } else {
        res.status(403)
      }
    } catch (error) {
      next(error);
    }
  },

  getById: async (req, res, next) => {
    try{
      const userExists = req.params.id === user.id
      if(!userExists){
        res.status(404)
      }
      res.json(user);
    }catch(error){
      next(error)
    }
  },

}