import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/reducers/auth-reducer";
import {Redirect} from "react-router-dom";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        login: (username, password) => {
            dispatch(loginThunkCreator(username, password))
        }
    }
}

let WithAuthRedirect = (props) => {
    if (props.isAuth) return <Redirect to={"/"}/>
    else return <Login {...props}/>
}

export default connect(mapStateToProps, mapDispatchToProps)(WithAuthRedirect)
