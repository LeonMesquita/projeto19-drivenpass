import { CardData } from "../interfaces/cardInterface";
import * as cardRepository from '../repositories/cardRepository';
import { checkExists } from "../utils/checkExists";
import dotenv from 'dotenv';
dotenv.config();
import Cryptr from "cryptr";
const cryptr = new Cryptr(process.env.CRYPTR_KEY!);


export async function createCard(cardData: CardData, userId: number){
    const encryptedPassword: string = cryptr.encrypt(cardData.password);
    const card = await cardRepository.findByTitle(cardData.title);
    if(card) throw{type: "conflict", message: "this user already has a card with this title"}
    await cardRepository.insert({
        ...cardData,
        user_id: userId,
        password: encryptedPassword
    });
}



export async function getCards(userId: number, cardId?: number){
    if(cardId){
        const card = await cardRepository.findById(cardId, userId);
        checkExists(card, 'card', userId);
        const decryptedPassword: string = cryptr.decrypt(card!.password);
        return {...card, password: decryptedPassword};
    }
    else{
        const result = await cardRepository.findAll(userId);
        const cards = result.map(card => {
            return{
                ...card,
                password: cryptr.decrypt(card.password)
            }
        });
        return cards;
    }
}


export async function deleteCard(userId: number, cardId: number){
    const card = await cardRepository.findById(cardId, userId);
    checkExists(card, 'card', userId);

    await cardRepository.deleteCard(cardId);
}