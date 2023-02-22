import dotenv from 'dotenv'
dotenv.config()

export const JWT_SECRET = process.env.JWT_SECRET;
export const PORT = process.env.PORT;
export const BASE_URL = process.env.BASE_URL