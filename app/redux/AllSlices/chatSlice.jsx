import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [
    {
      id: 1,
      firstname: "Abubakar",
      lastname: "Sarwar",
      username: "@abubakar",
      lastseen: "5 sec ago",
    },
    {
      id: 2,
      firstname: "Haider ",
      lastname: "Mehmood",
      username: "@haider",
      lastseen: "15 min ago",
    },
    {
      id: 3,
      firstname: "Muhammad ",
      lastname: "Ali",
      username: "@Ali",
      lastseen: "1 min ago",
    },
    {
      id: 4,
      firstname: "Asad",
      lastname: "Ali",
      username: "@Asad",
      lastseen: "5 min ago",
    },
  ],
  messages: {
    1: [
      { image: "/images/chatimg.jpeg", time: "9:05 AM", isSent: false },
      { text: "Hello John!", time: "9:00 AM", isSent: true },
      { text: "Muhammad Asad!", time: "9:05 AM", isSent: false },
      { image: "/images/chatimg.jpeg", time: "9:00 AM", isSent: true },
      { image: "/images/chatimg.jpeg", time: "9:05 AM", isSent: false },
      { text: "Muhammad Asad!", time: "9:05 AM", isSent: false },
    ],
    2: [
      { text: "Hello John!", time: "9:00 AM", isSent: true },
      { text: "Muhammad Asad!", time: "9:05 AM", isSent: false },
      { image: "/images/chatimg.jpeg", time: "9:00 AM", isSent: true },
      { text: "Muhammad Asad!", time: "9:05 AM", isSent: false },
      { image: "/images/chatimg.jpeg", time: "9:05 AM", isSent: false },
    ],
    3: [
      { text: "Hello John!", time: "9:00 AM", isSent: true },
      { image: "/images/chatimg.jpeg", time: "9:00 AM", isSent: true },
      { text: "Muhammad Asad!", time: "9:05 AM", isSent: true },
      { text: "Muhammad Asad!", time: "9:05 AM", isSent: false },
    ],
    4: [
      { text: "Hello John!", time: "9:00 AM", isSent: true },
      { text: "Muhammad Asad!", time: "9:05 AM", isSent: false },
      { image: "/images/chatimg.jpeg", time: "9:00 AM", isSent: true },
      { image: "/images/chatimg.jpeg", time: "9:05 AM", isSent: false },
      { text: "Muhammad Asad!", time: "9:05 AM", isSent: false },
    ],
  },
  selectedContactId: 1,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    selectContact: (state, action) => {
      state.selectedContactId = action.payload;
    },
    sendMessage: (state, action) => {
      const { contactId, message } = action.payload;
      state.messages[contactId].push({
        text: message,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isSent: true,
      });
    },
  },
});

export const { selectContact, sendMessage } = chatSlice.actions;
export const chatReducer = chatSlice.reducer;
