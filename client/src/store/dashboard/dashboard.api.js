import axios from "axios"
let baseUrl = "http://localhost:8080"
export const countDocument = async()=>{
    try{
        return await axios.get(`${baseUrl}/api/count-document`)
    }catch(err){
        console.log(err)
    }
}

export const departmentStatus = async()=>{
    try{
        return await axios.get(`${baseUrl}/api/department-status`)
    }catch(err){
        console.log(err)
    }
}