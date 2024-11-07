"use client";
import { sendMessage } from "@/app/redux/AllSlices/chatSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Emohi from "../Icons/Emohi";
import ClipIcon from "../Icons/ClipIcon";

const ChatInput = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const selectedContactId = useSelector(
    (state) => state.chat.selectedContactId,
  );

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      dispatch(sendMessage({ contactId: selectedContactId, message }));
      setMessage("");
    }
  };
  return (
    <>
      <form onSubmit={handleSendMessage}>
        <div className="sticky bottom-0 z-10 flex h-[60px] items-center space-x-2 rounded-b-xl bg-neutral-700 p-4">
          <input
            type="text"
            placeholder="Type a message"
            className="flex-1 rounded-lg bg-transparent px-4 py-2 text-xs font-medium outline-none placeholder:text-white"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="flex items-center gap-2">
            <div className="cursor-pointer">
              <Emohi />
            </div>
            <div className="cursor-pointer">
              <ClipIcon />
            </div>
            <button
              type="submit"
              className="flex h-[30px] items-center justify-center rounded-md bg-primary-1 p-2 text-white"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ChatInput;
