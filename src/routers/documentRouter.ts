import { Router } from "express";
import * as documentController from '../controllers/documentController';
import validateSchema from "../middlewares/validateSchema";
import documentSchema from "../schemas/documentSchema";
import authenticateToken from "../middlewares/validateToken";
const documentRouter = Router();


documentRouter.post('/documents',validateSchema(documentSchema), authenticateToken, documentController.createDocument);
documentRouter.get('/documents', authenticateToken, documentController.getDocuments);
documentRouter.delete('/documents/:documentId', authenticateToken, documentController.deleteDocument);

export default documentRouter;