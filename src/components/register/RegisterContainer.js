import React from "react";
import Register from "./Register";
import {connect} from "react-redux";
import {
    changeMailCreator,
    changePasswordCreator,
    changeUserNameCreator,
    registerFailureCreator
} from "../../redux/reducers/register-reducer";
import WithError from "../../hoc/withError";

let mapStateToProps = (state) => {
    return {
        username: state.register.username,
        password: state.register.password,
        mail: state.register.mail,
        isError: state.register.isError,
        errorMessage: state.register.errorMessage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateUserName: (payload) => {
            dispatch(changeUserNameCreator(payload.target.value))
        },
        updatePassword: (payload) => {
            dispatch(changePasswordCreator(payload.target.value))
        },
        updateMail: (payload) => {
            dispatch(changeMailCreator(payload.target.value))
        },
        registerFailure: (payload) => {
            dispatch(registerFailureCreator(payload.message))
        }
    }
}

let ErrorContainerHOC = WithError(Register)

const RegisterView = connect(mapStateToProps, mapDispatchToProps)(ErrorContainerHOC)

export default RegisterView;