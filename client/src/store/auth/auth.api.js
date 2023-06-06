import axios from "axios"
// let baseUrl = "http://localhost:8080"
let baseUrl = "https://kind-ruby-dolphin-tux.cyclic.app"
export const login = async(credentials)=>{
    try{
        return await axios.post(`${baseUrl}/api/login`,credentials)
    }catch(err){
        console.log(err)
    }
}