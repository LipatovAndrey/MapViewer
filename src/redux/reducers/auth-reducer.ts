import {LOGIN, LOGOUT} from "../actionTypes/action-types";
import {login} from "../../api/login-api";
import {stopSubmit} from "redux-form";
import {getCoordinate} from "../../api/coordinate-api";
import {getCoordinateCreator} from "./coordinate-reducer";
import axios, {AxiosResponse} from "axios";

type AuthStateType = {
    name: string | null
    token: string | null
    isAuth: boolean
}

let initialState: AuthStateType = {
    name: null,
    token: null,
    isAuth: false
};

type UserInfo = {
    name: string
    token: string
}

type LoginActionType = {
    type: typeof LOGIN
    userInfo: UserInfo
}

type LogoutActionType = {
    type: typeof LOGOUT
}

let AuthReducer = (state = initialState, action: LoginActionType | LogoutActionType): AuthStateType => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                name: action.userInfo.name,
                token: action.userInfo.token,
                isAuth: true
            }
        case LOGOUT:
            return {
                ...state,
                name: null,
                token: null,
                isAuth: false
            }
        // Do something here based on the different types of actions
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state
    }
}


export const logInCreator = (payload: UserInfo): LoginActionType => {
    return {type: LOGIN, userInfo: payload}
}



export const loginThunkCreator = (username: string, password: string) => {
    return async (dispatch: any) => {
        let loginResponse = await login({name: username, password: password})
        if (loginResponse.status === 200) {
            dispatch(logInCreator(loginResponse.data))
            let coordinateResponse = await getCoordinate(loginResponse.data.token)
            if (coordinateResponse.status === 200){
                dispatch(getCoordinateCreator(coordinateResponse.data))
            }
        } else {
            dispatch(stopSubmit("login", {_error: loginResponse.data}))
        }
    }
}

export const getIp = () => {
    axios.get("https://geolocation-db.com/json/")
        .then((value: AxiosResponse<IpResponse>) => alert(value.data.IPv4 + ' '+ value.data.latitude + ' '+ value.data.longitude))

}

export default AuthReducer;