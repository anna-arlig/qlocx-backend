import {Router} from 'express'
import {auth, getById} from "../controllers/UserController.js"
import {verifyToken} from "../middleware/auth.js"

export const user = new Router();

user.post("/auth", auth);

user.get("/find/:id", verifyToken, getById);

