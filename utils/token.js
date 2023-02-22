import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/index.js';

export const createToken = ( id) => {
  const newUser = {
    id
  };
  const token = jwt.sign(newUser, JWT_SECRET, { expiresIn: "1d" });
  return token;
};