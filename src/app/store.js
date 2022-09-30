import { configureStore } from '@reduxjs/toolkit'
import ChatReducer from '../features/chats/ChatSlice'
import userReducer from '../features/users/userSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    chat: ChatReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})