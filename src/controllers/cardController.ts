import { Request, Response } from "express";
import * as cardService from '../services/cardService';


export async function createCard(req: Request, res: Response){
    const userId: number = Number(res.locals.userId);
    await cardService.createCard(req.body, userId);
    return res.sendStatus(201);
}


export async function getCards(req: Request, res: Response){
    const userId: number = Number(res.locals.userId);
    const cardId = req.query["cardId"];

    const cards = await cardService.getCards(userId, cardId ? Number(cardId) : undefined);
    return res.status(200).send(cards);

}


export async function deleteCard(req: Request, res: Response){
    const userId: number = Number(res.locals.userId);
    const cardId = Number(req.params.cardId);
    
    await cardService.deleteCard(userId, cardId);
    return res.sendStatus(200);
}