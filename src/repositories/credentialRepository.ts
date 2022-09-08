import { ICredentialData } from "../interfaces/credentialInterface";
import prisma from "../config/database";

export async function insert(data: ICredentialData){
    await prisma.credentials.create({data});
}


export async function findByTitle(title: string, userId: number){
   const credential =  await prisma.credentials.findFirst({where: {title, user_id: userId}});
   return credential;
}

//const user = await prisma.users.findUnique({where: {id}});
