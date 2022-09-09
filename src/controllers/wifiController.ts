import { Request, Response } from "express";
import * as wifiService from '../services/wifiService';


export async function createWifi(req: Request, res: Response){
    const userId: number = Number(res.locals.userId);
    await wifiService.createWifi(req.body, userId);
    return res.sendStatus(201);
}



export async function getWifis(req: Request, res: Response){
    const userId: number = Number(res.locals.userId);
    const wifiId = req.query["wifiId"];

    const wifis = await wifiService.getWifis(userId, wifiId ? Number(wifiId) : undefined);
    return res.status(200).send(wifis)
}


export async function deleteWifi(req: Request, res: Response){
    const userId: number = Number(res.locals.userId);
    const wifiId = Number(req.params.wifiId);
    await wifiService.deleteWifi(userId, wifiId);
    return res.sendStatus(200);
}