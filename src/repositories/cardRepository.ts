import prisma from "../config/database";
import { CardData } from "../interfaces/cardInterface";


export async function insert(data: CardData){
    await prisma.cards.create({data});
}


export async function findByTitle(title: string){
    const card = await prisma.cards.findFirst({where:{title}});
    return card;
}


export async function findById(id: number, user_id: number){
    const card = await prisma.cards.findFirst({where: {id, user_id}});
    return card;
}

export async function findAll(user_id: number){
    const cards = await prisma.cards.findMany({where: {user_id}});
    return cards;
}


export async function deleteCard(id: number){
    await prisma.cards.delete({where: {id}});
}