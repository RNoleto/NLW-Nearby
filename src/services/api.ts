import axios from "axios";

export const api = axios.create({
    baseURL: "http://10.1.11.91:3333",
    timeout: 700,
})