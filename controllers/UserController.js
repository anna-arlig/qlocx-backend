import {createToken} from '../utils/token.js'

const User = {id: '1337', name: 'Anna Ärlig', email: 'anna.arlig@gmail.com', phone: '0730409156', password: 'Qlocx2016'}

export const auth = (req, res) => {
      const { email, password } = req.body;
      const isMatch = email === User.email && password === User.password;
      if (isMatch) {
        const token = createToken(
          User.id
        );
        res.json({ token });
      } else {
        res.status(403).send('Wrong credentials')
      }
  }

 export const getById = (req, res) => {
  
      const userExists = req.params.id === User.id
    
      if(userExists){
        res.json({name: User.name, email: User.email, phone: User.phone});
      }else{
        res.status(404).send('Not found')
      }
  }
