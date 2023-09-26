import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  signInWithGoogle,
  logout,
  register,
  signIn,
  getUserDoc,
} from "../firebase";
import { setCategories } from './categorySlice';

const INITIAL_STATE = {
  user: null,
};

export const loginWithGoogle = createAsyncThunk(
  "auth/loginWithGoogle",
  async (_, thunkApi) => {
    const {
      user: { uid, email, displayName },
    } = await signInWithGoogle();

    await getUserDoc({ uid, email });

    const user = { uid, email, displayName };
    
    thunkApi.dispatch(setUser(user));
  }
);

export const logoutFromApp = createAsyncThunk(
  "auth/logoutFromApp",
  (_, thunkApi) => {
    logout().then(() => {

      thunkApi.dispatch(setCategories(null)); // Также обнулить данные в таблице!
    });
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ email: userEmail, password }, thunkApi) => {

      try {
      let userCredentials = await register(userEmail, password);
      return {
          payload: {
              uid: userCredentials.user.uid,
              email: userCredentials.user.email,
              displayName: userCredentials.user.displayName
          }
      }
    }
 
    catch (err) {
      window.alert(err);
      throw err;
    }
    
    return null;
  }
);



export const signInUser = createAsyncThunk(
  "auth/signin",
  async ({ email: userEmail, password }, thunkApi) => {
    try {
      const {
        user: { uid, email, displayName },
      } = await signIn(userEmail, password);

      return { uid, email, displayName };
    } catch (err) {
      window.alert(err);
      throw err;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: {
    [logoutFromApp.rejected]: (state) => {
      state.user = null;
    },
    [logoutFromApp.fulfilled]: (state) => {
      state.user = null;
    },
    [registerUser.fulfilled]: (state, userData) => {
      state.user = userData.payload;
    },
    [signInUser.fulfilled]: (state, userData) => {
      state.user = userData.payload;
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
