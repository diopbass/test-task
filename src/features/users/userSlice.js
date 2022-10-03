import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    newUser: '',
    authUser: '',
    error: false,
}


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        hasError: (state) =>{
            state.error = true;
        },

        login: (state, action) => {
            state.newUser = action.payload
        },

        getUserSuccess: (state, action) => {
            state.authUser = action.payload;
        },

    
    }
})

export const {login, getUserSuccess, hasError} = userSlice.actions;


export const getAuthUser = () => async (dispatch) => {
   
    try {
      const user = sessionStorage.getItem("username");
      dispatch(getUserSuccess(user));
    } catch (error) {
      dispatch(hasError(error.message));
      return console.error(error);
    }
};

export default userSlice.reducer;