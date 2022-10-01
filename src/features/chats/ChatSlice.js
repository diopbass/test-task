import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chats: [],
    newChat: '',
    error: false,
    isWaiting: ''
}

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        startWaiting: (state) => {
        state.isWaiting = true;
        },
        hasError: (state, action) => {
        state.error = action.payload;
        state.isWaiting = false;
        },

        createChatSuccess: (state, action) => {
            state.newChat = action.payload;
        },
        getChatsSuccess: (state, action) => {
        state.chats = action.payload;
        state.isWaiting = false;
        },  
    }
})

export const { 
    startWaiting, 
    hasError, 
    createChatSuccess, 
    getChatsSuccess
} = chatSlice.actions;


export const fetchChats = () => async (dispatch) => {
    dispatch(startWaiting);
    try {
       let messages = localStorage.getItem('messages');
       let messageJson = JSON.parse(messages);
       dispatch(getChatsSuccess(messageJson))

    } catch (error) {
        dispatch(hasError())
        return console.error(error)
    }
};

export const addChat = (data) => async (dispatch) => {

    
    // localStorage.setItem('messages', JSON.stringify(data) );
    try {
        dispatch(createChatSuccess(data));
    } catch (error) {
        dispatch(hasError())
        return console.error(error)
    }
};


export default chatSlice.reducer;