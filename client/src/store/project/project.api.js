import axios from "axios"
import { BASE_URL } from "../../constant"
// let BASE_URL = "http://localhost:8080"

export const createProject = async(payload)=>{
    try{
        return await axios.post(`${BASE_URL}/api/project`,payload)
    }catch(err){
        console.log(err)
    }
}

export const getProject = async({limit,page})=>{
    try{
        return await axios.get(`${BASE_URL}/api/project?limit=${limit}&page=${page}`)
    }catch(err){
        console.log(err)
    }
}


export const changeStatus = async({id,payload})=>{
    try{
        return await axios.put(`${BASE_URL}/api/update-status/${id}`,payload)
    }catch(err){
        console.log(err)
    }
}

export const searchProject = async(query)=>{
    try{
        return await axios.get(`${BASE_URL}/api/search?search=${query}`)
    }catch(err){
        console.log(err)
    }
}

export const sortProject = async(sortBy)=>{
    try{
        return await axios.get(`${BASE_URL}/api/sort?sortBy=${sortBy}`)
    }catch(err){
        console.log(err)
    }
}


