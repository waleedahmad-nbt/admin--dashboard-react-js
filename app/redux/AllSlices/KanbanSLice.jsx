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
      if (state.tasks[section]) {
        state.tasks[section] = state.tasks[section].filter(
          (task) => task.id !== taskId,
        );
      }
    },
    moveTask: (state, action) => {
      const { section, taskId, draggedTask } = action.payload;
      // Remove the task from its original section
      for (const key in state.tasks) {
        state.tasks[key] = state.tasks[key].filter(
          (task) => task.id !== taskId,
        );
      }
      // Add the task to the new section
      state.tasks[section].push(draggedTask);
    },
  },
});

export const { addTask, editTask, deleteTask, moveTask } = kanbanSlice.actions;
export const kanbanReducer = kanbanSlice.reducer;
