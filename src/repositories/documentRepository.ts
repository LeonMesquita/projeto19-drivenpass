import prisma from "../config/database";
import { DocumentData } from "../interfaces/documentInterface";


export async function insert(data: DocumentData){
    await prisma.documents.create({data});
}


export async function findById(id: number, user_id: number){
    const document = await prisma.documents.findFirst({where: {id, user_id}});
    return document
}


export async function findAll(user_id: number){
    const documents = await prisma.documents.findMany({where: {user_id}});
    return documents;
}


export async function deleteDocument(id: number){
    await prisma.documents.delete({where: {id}});
}