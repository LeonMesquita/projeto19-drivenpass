import { Router } from "express";
import * as safeNoteController from '../controllers/safeNoteController';
import validateSchema from "../middlewares/validateSchema";
import safeNoteSchema from "../schemas/safeNoteSchema";
import authenticateToken from "../middlewares/validateToken";
const safeNoteRouter = Router();

safeNoteRouter.post('/safe-notes',validateSchema(safeNoteSchema), authenticateToken, safeNoteController.createSafeNotes);
safeNoteRouter.get('/safe-notes',authenticateToken, safeNoteController.getSafeNotes);
safeNoteRouter.delete('/safe-notes/:safeNoteId', authenticateToken, safeNoteController.deleteSafeNote);



export default safeNoteRouter;