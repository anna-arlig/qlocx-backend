const user = {id: '1337', name: 'Anna Ärlig', email: 'anna.arlig@gmail.com', phone: '0730409156', password: 'Qlocx2016'}
const Token = require("../utils/token");

module.exports = {

  auth: (req, res) => {
      const { email, password } = req.body;
      const isMatch = email === user.email && password === user.password;
      if (isMatch) {
        const token = Token.createToken(
          user.id
        );
        res.json({ token });
      } else {
        res.status(403).send('Wrong credentials')
      }
  },

  getById: (req, res) => {
  
      const userExists = req.params.id === user.id
    
      if(userExists){
        res.json({name: user.name, email: user.email, phone: user.phone});
      }else{
        res.status(404).send('Not found')
      }
  },

}