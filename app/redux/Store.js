import { configureStore } from "@reduxjs/toolkit";
import { calendarReducer } from "@/app/redux/AllSlices/CalenderSlice";
import { chatReducer } from "@/app/redux/AllSlices/chatSlice";
import { kanbanReducer } from "./AllSlices/KanbanSLice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Default storage (localStorage in web)

const persistConfig = {
  key: "root", // Key for the persisted store
  storage, // Use localStorage
  whitelist: ["kanban"], // Only persist the `kanban` slice
};

const persistedKanbanReducer = persistReducer(persistConfig, kanbanReducer);

export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    chat: chatReducer,
    kanban: persistedKanbanReducer, // Use the persisted reducer for kanban
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore actions and paths from redux-persist
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/REGISTER",
          "persist/FLUSH",
          "persist/PAUSE",
          "persist/PURGE",
        ],
        ignoredPaths: ["kanban._persist"], // Ignore redux-persist related paths
      },
    }),
});

export const persistor = persistStore(store); // Create the persistor
