import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "./auth.api";

const initialState = {
  loading: false,
  error: null,
  isLoggedIn: !!localStorage.getItem("token"),
};

export const loginByUser = createAsyncThunk("users/login", async (credentials) => {
  try {
    let res = await login(credentials);
    const token = res.data.accessToken;

    // Store the token in the local storage
    localStorage.setItem('token', token);
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutByUser(state){
      state.isLoggedIn = false;
      localStorage.clear('token')
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginByUser.fulfilled, (state,action) => {
        state.loading = false;
        state.isLoggedIn = true;
      })
      .addCase(loginByUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log(action)
      });
  },
});

export const {logoutByUser} = authSlice.actions;
export default authSlice.reducer;
