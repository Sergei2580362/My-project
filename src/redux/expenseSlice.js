import { createSlice } from "@reduxjs/toolkit";
import { initialData } from "../mock";

export const getExpenses = (state) => {
    return state.expenses.expensesArray;
}

export const getEditingExpense = (state) => {
    return state.expenses.editingExpense;
}

const expenseSlice = createSlice({
    name: 'expenses',
    initialState: {
        expensesArray: initialData, 
        editingExpense: 0
    },
    reducers: {
        addExpense( state, action ) {
            console.log("Try add date")
            console.log(action.payload.date);
            state.expensesArray.push({
                id: Date.now(),
                isEditing: false,
                date: action.payload.date,
                name: action.payload.expenseName,
                expenseAmount: action.payload.amount,
                category: action.payload.selectedCategory,
            })
            
        },
        deleteExpense(state, action) {
            state.expensesArray.splice(action.payload, 1);
        },
        setEditingExpense(state, action) {
            state.editingExpense = action.payload
        },
        updateExpense(state, action) {
            state.expensesArray[action.payload.id] = {
                id: Date.now(),
                isEditing: false,
                date: action.payload.date,
                name: action.payload.expenseName,
                expenseAmount: action.payload.amount,
                category: action.payload.selectedCategory,
            }
        }
    }
});

export const { addExpense, deleteExpense, setEditingExpense, updateExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
