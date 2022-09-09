import prisma from "../config/database";
import { WifiData } from '../interfaces/wifiInterface';



export async function insert(data: WifiData){
    await prisma.wifis.create({data});
}


export async function findById(user_id: number, id: number){
    const wifi = prisma.wifis.findFirst({where: {id, user_id}});
    return wifi;
}


export async function findAll(user_id: number){
    const wifis = prisma.wifis.findMany({where: {user_id}});
    return wifis;
}