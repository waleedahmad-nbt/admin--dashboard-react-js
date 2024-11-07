"use client";
import React from "react";
import ChatMessage from "./ChatMessage";
import { FaPhone } from "react-icons/fa6";
import { useSelector } from "react-redux";
import Image from "next/image";

const ChatWindow = () => {
  const selectedContactId = useSelector(
    (state) => state.chat.selectedContactId,
  );

  // Use fallback if messages[selectedContactId] is undefined
  const messages = useSelector(
    (state) => state.chat.messages[selectedContactId] || [],
  );

  const contact = useSelector((state) =>
    state.chat.contacts.find((c) => c.id === selectedContactId),
  );

  return (
    <>
      <div className="flex h-full flex-col rounded-xl bg-neutral-600">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between rounded-t-xl border-b border-darkGray bg-neutral-600 px-6 py-5">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 cursor-pointer">
              <Image
                width={32}
                height={32}
                unoptimized
                src="/images/Group 1000004743.png"
                alt="avatar1"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="cursor-pointer">
              <p className="text-xs font-medium text-white">
                {contact?.firstname} {contact?.lastname}
              </p>
              <p className="text-xs text-neutral-400">{contact?.username}</p>
            </div>
          </div>
          <button className="flex items-center justify-center gap-1.5 rounded bg-primary-1 px-3 py-1 text-xs font-medium text-white">
            <FaPhone />
            Call {contact?.firstname}
          </button>
        </div>

        {/* Chat Messages */}
        <div className="max-h-[670px] flex-1 space-y-4 overflow-y-auto px-6 py-4">
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              message={message}
              isSent={message.isSent}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ChatWindow;
