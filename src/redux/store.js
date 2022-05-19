import {configureStore} from '@reduxjs/toolkit';
import RegisterReducer from "./reducers/register-reducer";
import AuthReducer from "./reducers/auth-reducer";
import thunkMiddleware from "redux-thunk"
import {reducer as FormReducer} from "redux-form"
import CoordinateReducer from "./reducers/coordinate-reducer";

const store = configureStore({
    reducer: {
        register: RegisterReducer,
        auth: AuthReducer,
        coordinate: CoordinateReducer,
        form: FormReducer
    },
    middleware: [thunkMiddleware],
})

export default store