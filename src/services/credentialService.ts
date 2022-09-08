import { ICredentialData } from "../interfaces/credentialInterface";
import { credentials } from "@prisma/client";
import * as credentialRepository from '../repositories/credentialRepository';
import Cryptr from "cryptr";
const cryptr = new Cryptr('myTotallySecretKey');

export async function createCredential(credentialData: ICredentialData){
    const encryptedPassword = cryptr.encrypt(credentialData.password);

    const credential = await credentialRepository.findByTitle(credentialData.title, credentialData.user_id);
    if(credential) throw{type: 'conclict', message: 'This user already has a credential with this title'}
    await credentialRepository.insert({
        ...credentialData,
        password: encryptedPassword
    });
}



export async function searchCredentials(userId: number, credentialId?: number){
    let credentials: credentials[];
    let credential: credentials;
    if(credentialId){
         credential = await credentialRepository.findById(credentialId);
         if(!credential) throw{type: 'not_found', message: 'credential not found'}
         if(credential.user_id !== userId) throw{type: 'unauthorized', message: "this credential don't belongs to this user"}
         const decryptedPassword = cryptr.decrypt(credential.password);

         return {...credential, password: decryptedPassword};

    }

    else {
         const cred = await credentialRepository.findAll(userId);
         credentials = cred.map(cred => {
            return {
                ...cred,
                password: cryptr.decrypt(cred.password)
            }
         });

    }
    return credentials;
}



export async function deleteCredential(userId: number, credentialId: number){
    const credential = await credentialRepository.findById(credentialId);
    if(!credential) throw{type: 'not_found', message: 'credential not found'}
    if(credential.user_id !== userId) throw{type: 'unauthorized', message: "this credential don't belongs to this user"}

    await credentialRepository.deleteCredential(credentialId);

}