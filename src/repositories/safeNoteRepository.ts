import prisma from "../config/database";
import { ISafeNoteData } from "../interfaces/safeNoteInterface";

export async function insert(data: ISafeNoteData){
    await prisma.safe_notes.create({data});
}


export async function findByTitle(title: string, user_id: number){
    const safeNote = await prisma.safe_notes.findFirst({where: {title, user_id}});
    return safeNote;
}


export async function findAll(user_id: number){
    const safeNotes = await prisma.safe_notes.findMany({where: {user_id}});
    return safeNotes;

}


export async function findById(id: number){
    const safeNote = await prisma.safe_notes.findFirst({where: {id}});
    return safeNote;

}


export async function deleteSafeNote(id: number){
    await prisma.safe_notes.delete({where: {id}});
}