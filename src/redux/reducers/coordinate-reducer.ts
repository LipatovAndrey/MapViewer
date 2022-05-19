import {SET_COORDINATE} from "../actionTypes/action-types";


type Coordinate = {
    longitude: number
    latitude: number
}

type CoordinateStateType = {
    userCoordinate: Coordinate | null
}

let initialState: CoordinateStateType = {
    userCoordinate: null
};

type CoordinateActionType = {
    type: typeof SET_COORDINATE
    coordinate: Coordinate
}

let CoordinateReducer = (state = initialState, action: CoordinateActionType): CoordinateStateType => {
    switch (action.type) {
        case SET_COORDINATE:
            return {
                ...state,
                userCoordinate: action.coordinate
            }
        // Do something here based on the different types of actions
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state
    }
}

export const getCoordinateCreator = (payload: Coordinate): CoordinateActionType => {
    return {type: SET_COORDINATE, coordinate: payload}
}

export default CoordinateReducer;