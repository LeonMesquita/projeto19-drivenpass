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


export async function searchCredentials(req: Request, res: Response){
    const credentialId = req.query["credentialId"];
    const userId: number = res.locals.userId;
    const credentials = await credentialService.searchCredentials(userId, credentialId ? Number(credentialId) : undefined);
    return res.status(200).send(credentials);
}


export async function deleteCredential(req: Request, res: Response){
    const credentialId: number = Number(req.params.credentialId);
    const userId: number = res.locals.userId;
    await credentialService.deleteCredential(userId, credentialId);
    res.sendStatus(200);
}