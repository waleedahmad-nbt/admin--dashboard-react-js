"use client";
import { Provider } from "react-redux";
import "@/app/globals.css";
import { store } from "@/app/redux/Store";
import Sidebar from "../Sidebar/Sidebar";

export default function MainLayout({ children }) {
  return (
    <Provider store={store}>
      <div className="flex">
        <div className="sticky left-0 top-0 h-full min-h-[900px] w-[300px]">
          <Sidebar />
        </div>
        <div className="w-full overflow-hidden pt-7">{children}</div>
      </div>
    </Provider>
  );
}
