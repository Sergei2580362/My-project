import { createSlice } from "@reduxjs/toolkit";;

const INITIAL_STATE = {
    categoryItems: [
        "Food",
        "Fuel",
        "Utility bills"
    ],
};

export const getCategories = (state) => {
    return state.categoryItems;
}

const categorySlice = createSlice({
    name: "categories",
    initialState: INITIAL_STATE,
    reducers: {
        deleteCategory(state, action) {
            state.categoryItems = state.categoryItems.filter(
                (category) => category.id !== action.payload
            );
        },
        addCategory(state, action) {
            state.categoryItems.push(action.payload)
        },
        setCategories (state, action) {
            state.catgoryItems = action.payload;
        },
    }
});

export const {
    setCategories,
    addCategory
} = categorySlice.actions;

export default categorySlice.reducer;
