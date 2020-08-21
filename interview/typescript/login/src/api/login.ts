import { LoginEntity } from '../model/login';

export const isValidLogin = (loginInfo: LoginEntity):Promise<boolean> => 
    new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(loginInfo.login === 'admin' && loginInfo.password === "test")
        },500)
    })