import { ISafeNoteData } from "../interfaces/safeNoteInterface";
import * as safeNoteRepository from '../repositories/safeNoteRepository';

export async function createSafeNotes(safeNoteData: ISafeNoteData, userId: number){
    const safeNote = await safeNoteRepository.getByTitle(safeNoteData.title, userId);
    if(safeNote) throw{type: "conflict", message: "This user already have a safe note with this title"}
    await safeNoteRepository.insert({
        ...safeNoteData,
        user_id: userId
    })
}