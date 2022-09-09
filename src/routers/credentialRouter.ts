import { Router } from "express";
import * as credentialController from '../controllers/credentialController';
import validateSchema from "../middlewares/validateSchema";
import credentialSchema from "../schemas/credentialSchema";
import authenticateToken from "../middlewares/validateToken";
const credentialRouter = Router();


credentialRouter.post('/credentials',validateSchema(credentialSchema),authenticateToken, credentialController.createCredential);
credentialRouter.get('/credentials',authenticateToken, credentialController.getCredentials);
credentialRouter.delete('/credentials/:credentialId',authenticateToken, credentialController.deleteCredential);

export default credentialRouter;