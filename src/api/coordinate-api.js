import axios from "axios";



export const getCoordinate = (token) => {
    return axios.get('http://localhost:8081/coordinate/me', {headers: {'Authorization': 'Bearer '+token}})
}