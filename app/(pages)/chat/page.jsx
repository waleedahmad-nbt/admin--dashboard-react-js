import ChatInput from "@/app/_components/Chat/ChatInput";
import ChatSidebar from "@/app/_components/Chat/ChatSidebar";
import ChatWindow from "@/app/_components/Chat/ChatWindow";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="mb-10 flex flex-col px-4 lg:px-11">
      {/* Top Navigation */}
      <div className="flex flex-col justify-between gap-y-4 md:flex-row md:items-center">
        <div className="flex w-full items-center gap-12">
          <h2 className="text-xl font-semibold">Messages</h2>
          <div className="relative w-full max-w-[352px]">
            <input
              type="search"
              name="search"
              id="sea            rch"
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

      <div className="mt-11 flex w-full gap-4 lg:gap-[50px]">
        {/* Sidebar */}
        <div className="hidden w-[310px] flex-shrink-0 overflow-x-auto overflow-y-auto md:block">
          <ChatSidebar />
        </div>

        {/* Main Chat Area */}
        <div className="flex w-full flex-col rounded-xl bg-neutral-600">
          <ChatWindow />
          <ChatInput />
        </div>
      </div>
    </div>
  );
};

export default page;
