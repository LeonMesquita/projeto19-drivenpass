import { ICredentialData } from "../interfaces/credentialInterface";
import prisma from "../config/database";
import { credentials } from "@prisma/client";

export async function insert(data: ICredentialData){
    await prisma.credentials.create({data});
}


export async function findByTitle(title: string, userId: number){
   const credential =  await prisma.credentials.findFirst({where: {title, user_id: userId}});
   return credential;
}


export async function findAll(user_id: number){
    const credentials = await prisma.credentials.findMany({where: {user_id}});
    return credentials;
}


export async function findById(id: number){
    const credential = await prisma.credentials.findMany({where: {id}});
    return credential[0];
}


export async function deleteCredential(id: number){
    await prisma.credentials.delete({where: {id}})
}