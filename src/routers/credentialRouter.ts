import { Router } from "express";
import * as credentialController from '../controllers/credentialController';
import validateSchema from "../middlewares/validateSchema";
import credentialSchema from "../schemas/credentialSchema";
import authenticateToken from "../middlewares/validateToken";
const credentialRouter = Router();


credentialRouter.post('/credentials',validateSchema(credentialSchema),authenticateToken, credentialController.createCredential);


export default credentialRouter;