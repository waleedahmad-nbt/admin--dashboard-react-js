import { createSlice } from "@reduxjs/toolkit";

const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    view: "monthly", // default to 'monthly'
    selectedDate: new Date().toISOString(), // store as ISO string
  },
  reducers: {
    setView: (state, action) => {
      state.view = action.payload;
    },
    setSelectedDate: (state, action) => {
      // Expecting the action payload to be a Date object, convert it to an ISO string
      state.selectedDate =
        action.payload instanceof Date
          ? action.payload.toISOString()
          : action.payload;
    },
  },
});

export const { setView, setSelectedDate } = calendarSlice.actions;
export const calendarReducer = calendarSlice.reducer;
