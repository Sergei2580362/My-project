import React from "react";
import { LoginPage } from "./pages/login-page";
import { RegisterPage } from "./pages/register-page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/main-page";
import { NotFoundPage } from './pages/not-found-page';
import { SettingsPage } from "./pages/settings-page";
import { ExpenseEditPage } from "./pages/expense-edit-page";



export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path='/register' element={<RegisterPage/>}/>
                <Route path='/settings' element={<SettingsPage/>}/>
                <Route path='/edit' element={<ExpenseEditPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>  
        </BrowserRouter>
    );
};
