import { configureStore, combineReducers } from '@reduxjs/toolkit';
import categoriesReducer from './categorySlice';
import authReducer from './authSlice';
import expensesReducer from './expenseSlice';


export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        expenses: expensesReducer,
        auth: authReducer,
    }
});