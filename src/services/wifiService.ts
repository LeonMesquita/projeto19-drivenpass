import * as wifiRepository from '../repositories/wifiRepository';
import { WifiData } from '../interfaces/wifiInterface';
import { checkExists } from "../utils/checkExists";

import dotenv from 'dotenv';
dotenv.config();
import Cryptr from "cryptr";
const cryptr = new Cryptr(process.env.CRYPTR_KEY!);



export async function createWifi(wifiData: WifiData, userId: number){
    await wifiRepository.insert({
        ...wifiData,
        user_id: userId,
        password: cryptr.encrypt(wifiData.password)
    });
}


export async function getWifis(userId: number, wifiId?: number){
    if(wifiId){
        const wifi = await wifiRepository.findById(userId, wifiId);
        checkExists(wifi, 'wifi', userId);
        const decryptedPassword: string = cryptr.decrypt(wifi!.password);
        return {...wifi, password: decryptedPassword};
    }
    else{
        const result = await wifiRepository.findAll(userId);
        const wifis = result.map(wifi => {
            return{
                ...wifi,
                password: cryptr.decrypt(wifi.password)
            }
        });
        return wifis;
    }
}


export async function deleteWifi(userId: number, wifiId: number){
    const wifi = await wifiRepository.findById(userId, wifiId);
    checkExists(wifi, 'wifi', userId);

    await wifiRepository.deleteWifi(wifiId);
}