import { ICredentialData } from "../interfaces/credentialInterface";
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