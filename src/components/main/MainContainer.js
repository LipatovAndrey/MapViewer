import React from "react";
import Redirect from "react-router-dom/es/Redirect";
import {connect} from "react-redux";
import Main from "./Main";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        userCoordinate: state.coordinate.userCoordinate
    }
}

let WithAuthRedirect = (props) => {
    if (!props.isAuth) return <Redirect to={"/login"}/>
    else return <Main {...props}/>
}

export default connect(mapStateToProps, null)(WithAuthRedirect)
