import { DocumentData } from "../interfaces/documentInterface";
import * as documentRepository from '../repositories/documentRepository';


export async function createDocument(documentData: DocumentData, userId: number){
    await documentRepository.insert({
        ...documentData,
        user_id: userId
    });
}


export async function getDocuments(userId: number, documentId?: number){
    if(documentId){
        const document = await documentRepository.findById(documentId, userId);
        if(!document) throw{type: 'not_found', message: 'document not found'};
        if(document.user_id !== userId) throw{type: 'unauthorized', message: "this document don't belongs to this user"};
        return document;
    }
    else{
        const documents = await documentRepository.findAll(userId);
        return documents;
    }
}


export async function deleteCard(userId: number, documentId: number){
    const document = await documentRepository.findById(documentId, userId);
    if(!document) throw{type: 'not_found', message: 'document not found'}
    if(document.user_id !== userId) throw{type: 'unauthorized', message: "this document don't belongs to this user"}

    await documentRepository.deleteDocument(documentId);
}