import axios from "axios"
let baseUrl = "http://localhost:8080"
export const createProject = async(payload)=>{
    try{
        return await axios.post(`${baseUrl}/api/project`,payload)
    }catch(err){
        console.log(err)
    }
}

export const getProject = async()=>{
    try{
        return await axios.get(`${baseUrl}/api/project`)
    }catch(err){
        console.log(err)
    }
}