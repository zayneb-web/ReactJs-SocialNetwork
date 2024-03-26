// chatSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chats: [],
  currentChat: null,
  messages: [],
  notification: null,
  badgeCount: 0,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChats(state, action) {
      state.chats = action.payload;
    },
    setCurrentChat(state, action) {
      state.currentChat = action.payload;
    },
    setMessages(state, action) {
      state.messages = action.payload;
    },
    addMessages(state, action) {
      state.messages.push(action.payload);
      if (action.payload.senderId !== state.user?._id) {
        state.notification = action.payload;
       // state.badgeCount += 1; // Increment badge count when a new message is received
      }
    },
    getChats(state, action) {
      state.chats = action.payload;
    },
    receiveChat(state, action) {
      state.chats.push(action.payload);
    },
    receiveMessage(state, action) {
      state.messages.push(action.payload);
      if (action.payload.senderId !== state.user?._id) {
        state.notification = action.payload;
        state.badgeCount += 1; // Increment badge count when a new message is received
      }
    },
  },
});

export const {
  setChats,
  setCurrentChat,
  setMessages,
  addMessages,
  getChats,
  receiveChat,
  receiveMessage,
} = chatSlice.actions;

export default chatSlice.reducer;