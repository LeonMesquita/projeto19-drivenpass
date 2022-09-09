import { Request, Response } from "express";
import * as safeNoteService from '../services/safeNoteService';


export async function createSafeNotes(req: Request, res: Response){
    const userId: number = res.locals.userId;
    await safeNoteService.createSafeNotes(req.body, userId);
    return res.sendStatus(201);
}


export async function getSafeNotes(req: Request, res: Response){
    const userId: number = res.locals.userId;
    const safeNoteId = req.query["safeNoteId"];
    const safeNotes = await safeNoteService.getSafeNotes(userId, safeNoteId ? Number(safeNoteId) : undefined);

    res.status(200).send(safeNotes)
}