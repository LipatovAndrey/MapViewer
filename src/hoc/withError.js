import Register from "../components/register/Register";
import React from "react";

let WithError= Component => ({ ...props }) =>{
    if (props.isError) return <div>{props.errorMessage}</div>
    else return <Component {...props}/>
}

export default WithError;