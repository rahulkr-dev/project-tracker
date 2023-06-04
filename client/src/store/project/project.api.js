import axios from "axios"
let baseUrl = "http://localhost:8080"
export const createProject = async(payload)=>{
    try{
        return await axios.post(`${baseUrl}/api/project`,payload)
    }catch(err){
        console.log(err)
    }
}

export const getProject = async({limit,page})=>{
    try{
        return await axios.get(`${baseUrl}/api/project?limit=${limit}&page=${page}`)
    }catch(err){
        console.log(err)
    }
}


export const changeStatus = async({id,payload})=>{
    try{
        return await axios.put(`${baseUrl}/api/update-status/${id}`,payload)
    }catch(err){
        console.log(err)
    }
}