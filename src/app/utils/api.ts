import axios from "axios";
import { BASE_URL } from "../constants/constants";

console.log('API',process.env.NEXT_PUBLIC_BASE_URL)


export const api = axios.create({
    baseURL : BASE_URL
    
})