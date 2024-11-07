import { configureStore } from "@reduxjs/toolkit";
import { calendarReducer } from "@/app/redux/AllSlices/CalenderSlice";
import { chatReducer } from "@/app/redux/AllSlices/chatSlice";

export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    chat: chatReducer,
  },
});
