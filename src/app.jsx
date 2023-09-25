import React from "react";
import { MainPage } from './pages/main-page';
import { LoginPage } from './pages/login-page';
import { RegisterPage } from "./pages/register-page";
import { Router } from "./routes";
import { Provider } from 'react-redux';
import { store } from './redux';


export const App = () => {
    return (
        <Provider store={store}>       
        {/* <TodoContextProvider> */}
            <Router/>
        {/* </TodoContextProvider> */}
        </Provider>
    )
};