import './App.css';
import {Provider} from "react-redux";
import {
    BrowserRouter,
    Route
} from 'react-router-dom';
import React from 'react';
import LoginContainer from "./components/login/LoginContainer";
import store from "./redux/store";
import RegisterContainer from "./components/register/RegisterContainer";
import MainContainer from "./components/main/MainContainer";

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Route path="/login" render={(props) => <LoginContainer/>}/>
                <Route path="/register" render={(props) => <RegisterContainer/>}/>
                <Route path="/" render={(props) => <MainContainer/>}/>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
