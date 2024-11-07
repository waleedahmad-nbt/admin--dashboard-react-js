import Image from "next/image";
import React from "react";

const ChatMessage = ({ message, isSent }) => {
  return (
    <div className={`flex ${isSent ? "justify-end" : "justify-start"} mb-2`}>
      <div>
        <div>
          {message.text && (
            <p
              className={`rounded-[10px] p-3 ${
                isSent ? "bg-Purple text-white" : "bg-[#081028] text-white"
              } h-full max-w-[243px] break-words`}
            >
              {message.text}
            </p>
          )}
          {message.image && (
            <Image
              width={250}
              height={250}
              unoptimized
              src={message.image}
              alt="message-image"
              className="rounded-xl object-cover"
            />
          )}
        </div>
        <span className="text-xs text-gray-400">{message.time}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
