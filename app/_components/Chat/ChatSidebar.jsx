"use client";
import { selectContact } from "@/app/redux/AllSlices/chatSlice";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ChatSidebar = ({ toggleSidebar }) => {
  const contacts = useSelector((state) => state.chat.contacts);
  const selectedContactId = useSelector(
    (state) => state.chat.selectedContactId,
  );
  const dispatch = useDispatch();

  return (
    <>
      <div className="overflow-y-auto">
        <h2 className="text-base font-medium">Active</h2>
        <div className="mt-2.5 flex items-center gap-[13px]">
          <div>
            <Image
              width={32}
              height={32}
              src="/images/Avatar Circle.png"
              alt="avatar1"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <Image
              width={32}
              height={32}
              src="/images/Avatar Circle (1).png"
              alt="avatar1"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <Image
              width={32}
              height={32}
              src="/images/Avatar Circle (4).png"
              alt="avatar1"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <Image
              width={32}
              height={32}
              src="/images/Avatar Circle (2).png"
              alt="avatar1"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <Image
              width={32}
              height={32}
              src="/images/Avatar Circle.png"
              alt="avatar1"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <Image
              width={32}
              height={32}
              src="/images/Avatar Circle (5).png"
              alt="avatar1"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="mb-4 mt-[50px] flex items-center gap-2">
          <h2 className="text-sm font-medium">Messages</h2>
          <p className="flex size-7 items-center justify-center rounded-sm border border-[#575DFF80] text-xs text-gray-400">
            40
          </p>
        </div>

        <div className="mt-8">
          <ul>
            {contacts.map((contact) => (
              <li
                key={contact.id}
                className={`cursor-pointer rounded-md p-6 duration-300 ease-in-out ${
                  selectedContactId === contact.id
                    ? "bg-neutral-600"
                    : "hover:bg-neutral-700"
                }`}
                onClick={() => {
                  dispatch(selectContact(contact.id)); // Select the contact
                  toggleSidebar(); // Close the sidebar
                }}
              >
                <div onClick={toggleSidebar} className="flex justify-between">
                  <div className="flex items-center gap-2.5">
                    <Image
                      width={32}
                      height={32}
                      unoptimized
                      src="/images/Avatar Circle (4).png"
                      alt="avatar"
                      className="h-full w-full object-cover"
                    />
                    <div>
                      <p className="whitespace-nowrap text-xs font-medium text-white">
                        {contact.firstname} {contact.lastname}
                      </p>
                      <p className="text-xs text-neutral-400">
                        {contact.username}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400">
                      {contact.lastseen}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ChatSidebar;
