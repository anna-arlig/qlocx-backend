import { JWT_SECRET } from '../config/index.js'
import jwt from 'jsonwebtoken'

 export const verifyToken = async (req, res, next) => {
   
      try {
        const token = req.header("Authorization").replace("Bearer ", "");
        const user = jwt.verify(token, JWT_SECRET);

        req.user = user;
        next();
      } 
     catch {
      res.status(401).send('Ogiltig token')
  }}