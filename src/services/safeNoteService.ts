import { ISafeNoteData } from "../interfaces/safeNoteInterface";
import * as safeNoteRepository from '../repositories/safeNoteRepository';

export async function createSafeNotes(safeNoteData: ISafeNoteData, userId: number){
    const safeNote = await safeNoteRepository.findByTitle(safeNoteData.title, userId);
    if(safeNote) throw{type: "conflict", message: "This user already have a safe note with this title"}
    await safeNoteRepository.insert({
        ...safeNoteData,
        user_id: userId
    })
}


export async function getSafeNotes(userId: number, safeNoteId?: number){
    if(safeNoteId){
        const safeNote = await safeNoteRepository.findById(safeNoteId);
        if(!safeNote) throw{type: 'not_found', message: 'safe note not found'}
        if(safeNote.user_id !== userId) throw{type: 'unauthorized', message: "this safe note don't belongs to this user"}
        return safeNote;
    }
    else{
        const safeNotes = await safeNoteRepository.findAll(userId);
        return safeNotes;
    }

}

   