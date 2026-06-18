import { api } from './../config/properties';

export const getUsers = async () => {
    try {
        const result = await fetch(`${api.root}/users`)
        const json = await result.json();
        return await Promise.resolve(json);
    }
    catch (err) {
        return await Promise.reject(err);
    }
}

export const deleteUsers = async (userId) => {
    console.log("DELETEAPI:::",userId)
    try{
        const result = await fetch(`${api.root}/users/${userId}`,{method:'DELETE'});
        const json = await result.json(); //{} 204 No Content
        console.log("RESULT::::",json)
        return await Promise.resolve(userId)
    }
    catch(err){
        Promise.reject(err)
    }
}