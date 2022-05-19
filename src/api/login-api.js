import axios from "axios";

const AUTH_URL = "http://localhost:8081/auth";
const a = axios.create({baseURL: 'http://localhost:8081', headers: {'header': 'value'}})

export const login = (data) => {
    return axios.post(AUTH_URL, data)
}