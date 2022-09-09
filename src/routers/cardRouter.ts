import { Router } from "express";
import * as cardController from '../controllers/cardController';
import validateSchema from "../middlewares/validateSchema";
import cardSchema from "../schemas/cardSchema";
import authenticateToken from "../middlewares/validateToken";

const cardRouter = Router();

cardRouter.post("/cards",validateSchema(cardSchema), authenticateToken, cardController.createCard);
cardRouter.get("/cards", authenticateToken, cardController.getCards);
cardRouter.delete("/cards/:cardId", authenticateToken, cardController.deleteCard);


export default cardRouter;