import axios from "axios";

const REGISTER_URL = "http://localhost:8081/auth/register";

export const register = (data, onFailure) => {
    axios.post(REGISTER_URL, data)
        .then(value => {
            console.log(value)
        })
        .catch(reason => {
            debugger;
                onFailure(reason)
            }
        )//todo make redirect after ok
}