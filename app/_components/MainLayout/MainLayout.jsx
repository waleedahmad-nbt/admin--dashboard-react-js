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
        <div className="flex h-full">
          <div className="sticky left-0 top-0 h-full min-h-[100vh]">
            <div className="SideBarShadow hidden min-h-[100vh] overflow-y-auto xl:block">
              <Sidebar />
            </div>
            <div className="SideBarShadow block h-screen xl:hidden">
              <ResponsiveSidebar />
            </div>
          </div>
          <div className="w-full overflow-hidden pt-7">{children}</div>
        </div>
      </PersistGate>
    </Provider>
  );
}
