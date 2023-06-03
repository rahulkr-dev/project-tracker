import axios from "axios"

export const login = async(credentials)=>{
    try{
        return await axios.post('http://localhost:8080/api/login',credentials)
    }catch(err){
        console.log(err)
    }
}