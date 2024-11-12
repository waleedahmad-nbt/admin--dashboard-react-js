"use client";
import { Provider } from "react-redux";
import "@/app/globals.css";
import { persistor, store } from "@/app/redux/Store";
import Sidebar from "../Sidebar/Sidebar";
import ResponsiveSidebar from "../Sidebar/ResponsiveSidebar";
import { PersistGate } from "redux-persist/integration/react";

export default function MainLayout({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="flex">
          <div className="sticky left-0 top-0 h-full">
            <div className="hidden xl:block">
              <Sidebar />
            </div>
            <div className="block xl:hidden">
              <ResponsiveSidebar />
            </div>
          </div>
          <div className="w-full overflow-hidden pt-7">{children}</div>
        </div>
      </PersistGate>
    </Provider>
  );
}
