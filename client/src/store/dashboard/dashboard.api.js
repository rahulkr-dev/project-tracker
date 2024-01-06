import axios from "axios"
import { BASE_URL } from "../../constant"
// let BASE_URL = "http://localhost:8080"

export const countDocument = async()=>{
    try{
        return await axios.get(`${BASE_URL}/api/count-document`)
    }catch(err){
        console.log(err)
    }
}

export const departmentStatus = async()=>{
    try{
        return await axios.get(`${BASE_URL}/api/department-status`)
    }catch(err){
        console.log(err)
    }
}