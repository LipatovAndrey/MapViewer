import {
    CHANGE_REGISTER_USERNAME,
    CHANGE_REGISTER_PASSWORD,
    CHANGE_REGISTER_MAIL,
    REGISTER_FAILURE
} from "../actionTypes/action-types";


let initialState = {username: '', password: '', mail: '', isError: false, errorMessage: ''};


let RegisterReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_REGISTER_USERNAME:
            return {
                ...state,
                username: action.payload
            }
        case CHANGE_REGISTER_PASSWORD:
            return {
                ...state,
                password: action.payload
            }
        case CHANGE_REGISTER_MAIL:
            return {
                ...state,
                mail: action.payload
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                isError: true,
                errorMessage: action.payload
            }
        // Do something here based on the different types of actions
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state
    }
}

export const changeUserNameCreator = (payload) => {
    return {type: CHANGE_REGISTER_USERNAME, payload: payload}
}

export const changePasswordCreator = (payload) => {
    return {type: CHANGE_REGISTER_PASSWORD, payload: payload}
}

export const changeMailCreator = (payload) => {
    return {type: CHANGE_REGISTER_MAIL, payload: payload}
}

export const registerFailureCreator = (payload) => {
    return {type: REGISTER_FAILURE, payload: payload}
}


export default RegisterReducer;