import axios from "axios"
import { BASE_URL } from "../../constant"
// let BASE_URL = "http://localhost:8080"
export const login = async(credentials)=>{
    try{
        return await axios.post(`${BASE_URL}/api/login`,credentials)
    }catch(err){
        console.log(err)
    }
}