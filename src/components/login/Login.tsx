import React, {FormEventHandler} from "react";
import style from "./Login.module.css";
import {Field, FormSubmitHandler, reduxForm, SubmitHandler} from "redux-form";
import ValidatedField from "./ValidatedField";
import {required} from "../../validators/validator";
import {NavLink} from "react-router-dom";
import axios from "axios";

type LoginFormProps = {
    handleSubmit: (data: UserCredentials) => void
    error: any
}

type UserCredentials = {
    username: string
    password: string
}

const LoginForm = ({handleSubmit, error}: any) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field className={style.username}
                   component={ValidatedField}
                   type='text'
                   name='username'
                   label='username'
                   placeholder='username' validate={[required]}
            />
            <Field className={style.password}
                   component={ValidatedField}
                   type='password'
                   name='password'
                   label='password'
                   validate={[required]} placeholder='password'
            />
            <button className={style.loginButton}>log in</button>
            {error && <div>{error}</div>}
            <NavLink className={style.register} to="/register">register</NavLink>
        </form>
    )
}


const ReduxLoginForm = reduxForm({form: "login"})(LoginForm);

const Login = (props: any) => {
    const onSubmit = (data: any) => {
        props.login(data.username, data.password)
    }

    return (
        <div className={style.LoginContainer}>
            <p className={style.title}>Log in</p>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login