import axios from "axios"
let baseUrl = "http://localhost:8080"
export const login = async(credentials)=>{
    try{
        return await axios.post(`${baseUrl}/api/login`,credentials)
    }catch(err){
        console.log(err)
    }
}