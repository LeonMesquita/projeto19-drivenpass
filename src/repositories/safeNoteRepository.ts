import prisma from "../config/database";
import { ISafeNoteData } from "../interfaces/safeNoteInterface";

export async function insert(data: ISafeNoteData){
    await prisma.safe_notes.create({data});
}


export async function getByTitle(title: string, user_id: number){
    const safeNote = await prisma.safe_notes.findFirst({where: {title, user_id}});
    return safeNote;
}