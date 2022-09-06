import { Router } from "express";
import * as authController from '../controllers/authController';
const authRouter = Router();

authRouter.post('/signup', authController.signupUser);
authRouter.post('/signin', authController.signinUser);


export default authRouter;