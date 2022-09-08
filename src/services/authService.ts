import { IAuthData } from "../interfaces/authInterface";
import * as authRepository from '../repositories/authRepository';
import bcrypt from 'bcrypt';



export async function createUser(userData: IAuthData){
    const encryptedPassword = bcrypt.hashSync(userData.password, 10);
    const user = await authRepository.findByEmail(userData.email)
    if(user) throw{type: "conflict", message: "This user already exists"}
    
    await authRepository.insert({
        ...userData,
        password: encryptedPassword
    });
}


export async function loginUser(userData: IAuthData){

}