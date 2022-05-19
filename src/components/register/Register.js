import React from "react";
import {register} from "../../api/register-api";
import style from "./Register.module.css";
import {NavLink} from "react-router-dom";


const Register = (props) => {
    return (
            <div className={style.container}>
                <div className={style.title}>Register</div>
                <input className={style.username} type='text' name='userName' placeholder='userName'
                       value={props.username}
                       onChange={props.updateUserName}/>
                <br/>
                <input className={style.password} type='password' name='password' placeholder='password'
                       value={props.password}
                       onChange={props.updatePassword}/>
                <br/>
                <input className={style.mail} type='text' name='mail' placeholder='mail' value={props.mail}
                       onChange={props.updateMail}/>
                <br/>
                <button className={style.registerButton} onClick={() => {
                    register({name: props.username, password: props.password, email: props.mail}, props.registerFailure)
                }

                }>Register
                </button>
                <NavLink className={style.forgetPassword} to="/forgetPassword">forget password</NavLink>
            </div>
    );
};

export default Register;