import { Request, Response } from "express";
import * as safeNoteService from '../services/safeNoteService';


export async function createSafeNotes(req: Request, res: Response){
    const userId: number = res.locals.userId;
    await safeNoteService.createSafeNotes(req.body, userId);
    return res.sendStatus(201);
}