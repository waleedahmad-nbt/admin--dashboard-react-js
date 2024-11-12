import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: {
    todo: [],
    inProgress: [],
    completed: [],
  },
};

const kanbanSlice = createSlice({
  name: "kanban",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { section, task } = action.payload;
      state.tasks[section].push(task);
    },
    editTask: (state, action) => {
      const { section, taskId, updatedTask } = action.payload;
      state.tasks[section] = state.tasks[section].map((task) =>
        task.id === taskId ? { ...task, ...updatedTask } : task,
      );
    },
    deleteTask: (state, action) => {
      const { section, taskId } = action.payload;

      if (state.tasks[section] && Array.isArray(state.tasks[section])) {
        state.tasks[section] = state.tasks[section].filter(
          (task) => task.id !== taskId,
        );
      }
    },
  },
});

export const { addTask, editTask, deleteTask } = kanbanSlice.actions;
export const kanbanReducer = kanbanSlice.reducer;
