import { Request, Response } from "express";
import * as credentialService from '../services/credentialService';


export async function createCredential(req: Request, res: Response){
    const userId: number = res.locals.userId;
    await credentialService.createCredential({
        ...req.body,
        user_id: userId
    });
    return res.sendStatus(201);
}