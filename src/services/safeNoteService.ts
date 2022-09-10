import { SafeNoteData } from "../interfaces/safeNoteInterface";
import * as safeNoteRepository from '../repositories/safeNoteRepository';
import { checkExists } from "../utils/checkExists";


export async function createSafeNotes(safeNoteData: SafeNoteData, userId: number){
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
        checkExists(safeNote, 'safe note', userId);
        return safeNote;
    }
    else{
        const safeNotes = await safeNoteRepository.findAll(userId);
        return safeNotes;
    }

}


export async function deleteSafeNote(safeNoteId: number, userId: number){
    const safeNote = await safeNoteRepository.findById(safeNoteId);
    checkExists(safeNote, 'safe note', userId);    

    await safeNoteRepository.deleteSafeNote(safeNoteId);
}