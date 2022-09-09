import { DocumentData } from "../interfaces/documentInterface";
import * as documentRepository from '../repositories/documentRepository';
import { checkExists } from "../utils/checkExists";

export async function createDocument(documentData: DocumentData, userId: number){
    await documentRepository.insert({
        ...documentData,
        user_id: userId
    });
}


export async function getDocuments(userId: number, documentId?: number){
    if(documentId){
        const document = await documentRepository.findById(documentId, userId);
        checkExists(document, 'document', userId);
        return document;
    }
    else{
        const documents = await documentRepository.findAll(userId);
        return documents;
    }
}


export async function deleteCard(userId: number, documentId: number){
    const document = await documentRepository.findById(documentId, userId);
    checkExists(document, 'document', userId);
    await documentRepository.deleteDocument(documentId);
}