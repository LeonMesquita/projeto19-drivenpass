import { Router } from "express";
import * as safeNoteController from '../controllers/safeNoteController';
import validateSchema from "../middlewares/validateSchema";
const safeNoteRouter = Router();




export default safeNoteRouter;