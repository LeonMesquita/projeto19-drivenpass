import {Request, Response} from 'express';
import * as documentService from '../services/documentService';

export async function createDocument(req: Request, res: Response){
    const userId: number = res.locals.userId;
    await documentService.createDocument(req.body, userId);
    res.sendStatus(201);
}


export async function getDocuments(req: Request, res: Response){
    const userId: number = res.locals.userId;
    const documentId = req.query["documentId"];
    const documents = await documentService.getDocuments(userId, documentId ? Number(documentId) : undefined);
    return res.status(200).send(documents);
}


export async function deleteDocument(req: Request, res: Response){
    const userId: number = res.locals.userId;
    const documentId = Number(req.params.documentId);

    await documentService.deleteCard(userId, documentId);
    return res.sendStatus(200);
}