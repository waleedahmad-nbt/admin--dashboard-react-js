"use client";
import React, { useState } from "react";
import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";
import ChatSidebar from "./ChatSidebar";
import Image from "next/image";

const Chat = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="mb-10 flex flex-col px-4 lg:px-11">
        {/* Top Navigation */}
        <div className="flex flex-col justify-between gap-y-4 md:flex-row md:items-center">
          <div className="flex w-full items-center gap-12">
            <h2 className="text-xl font-semibold">Messages</h2>
            <div className="relative w-full max-w-[352px]">
              <input
                type="search"
                name="search"
                id="search"
                className="h-[42px] w-full rounded border border-darkGray bg-neutral-600 ps-9 text-xs text-neutral-400 outline-none"
                placeholder="Search for..."
              />
              <div className="absolute left-[14px] top-[14px]">
                <Image
                  width={13}
                  height={13}
                  src="/images/Search.svg"
                  alt="search"
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
          <button className="flex h-[30px] max-w-[200px] items-center justify-center whitespace-nowrap rounded bg-primary-1 px-4 text-xs font-medium text-white">
            Write message
          </button>
        </div>

        <div className="mb-5 mt-11 flex h-full w-full gap-4 lg:gap-[50px]">
          {/* Sidebar */}

          <div
            className={`${
              isSidebarOpen
                ? "z-50 block max-md:fixed max-md:left-0 max-md:top-0 max-md:p-4"
                : "hidden"
            } h-full w-[310px] flex-shrink-0 bg-neutral-800 transition-all duration-300 ease-in-out md:block`}
          >
            <ChatSidebar toggleSidebar={toggleSidebar} />
          </div>

          {/* Main Chat Area */}
          <div className="flex h-full w-full flex-col rounded-xl bg-neutral-600">
            {/* Sidebar Toggle Button on small screens */}

            <ChatWindow toggleSidebar={toggleSidebar} />
            <ChatInput />
          </div>
        </div>
      </div>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black opacity-50 max-md:block md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Chat;
