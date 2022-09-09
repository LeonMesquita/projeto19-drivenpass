import { Router } from "express";
import * as wifiController from '../controllers/wifiController';
import validateSchema from "../middlewares/validateSchema";
import authenticateToken from "../middlewares/validateToken";
import wifiSchema from "../schemas/wifiSchema";
const wifiRouter = Router();

wifiRouter.post('/wifis',validateSchema(wifiSchema), authenticateToken, wifiController.createWifi);
wifiRouter.get('/wifis', authenticateToken, wifiController.getWifis);

export default wifiRouter;