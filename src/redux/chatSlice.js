import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chats: [],
  currentChat: null,
  messages: [],
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
    addMessage(state, action) {
      state.messages.push(action.payload);
    },
    receiveMessage(state, action) {
      state.messages.push(action.payload);
    },
    getChats(state, action) {
      state.chats = action.payload;
    },
    receiveChat(state, action) {
      state.chats.push(action.payload);
    },
  },
});

export const { setChats, setCurrentChat, setMessages, addMessage, receiveMessage, getChats, receiveChat } = chatSlice.actions;

export default chatSlice.reducer;
