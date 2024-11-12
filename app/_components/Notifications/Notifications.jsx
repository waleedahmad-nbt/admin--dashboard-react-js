"use client";
import React, { useState } from "react";
import { FaMobile } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const NotificationSettings = () => {
  const [notifications, setNotifications] = useState({
    general: [
      { id: 1, text: "I'm mentioned in a message", inApp: true, email: false },
      {
        id: 2,
        text: "Someone replies to any message",
        inApp: false,
        email: true,
      },
      { id: 3, text: "I'm assigned a task", inApp: false, email: true },
      { id: 4, text: "A task is overdue", inApp: true, email: false },
    ],
    summary: [
      { id: 5, text: "Daily summary", inApp: false, email: true },
      { id: 6, text: "Weekly summary", inApp: true, email: false },
      { id: 7, text: "Monthly summary", inApp: false, email: true },
      { id: 8, text: "Annually summary", inApp: true, email: false },
    ],
  });

  const toggleNotification = (section, id, type) => {
    setNotifications((prev) => ({
      ...prev,
      [section]: prev[section].map((notification) =>
        notification.id === id
          ? { ...notification, [type]: !notification[type] }
          : notification,
      ),
    }));
  };

  return (
    <>
      <div className="mb-28">
        {/* General Notifications Section */}
        <div>
          <h2 className="text-base font-medium">General notifications</h2>
          <p className="text text-sm font-medium text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipiscing.
          </p>
          <div className="mt-6 space-y-10 rounded-xl border border-darkGray bg-neutral-600 p-4">
            {notifications.general.map((notification) => (
              <div
                key={notification.id}
                className="flex items-center justify-between"
              >
                <span className="text-sm">{notification.text}</span>
                <div className="flex rounded">
                  <button
                    onClick={() =>
                      toggleNotification("general", notification.id, "inApp")
                    }
                    className={`flex h-[30px] items-center gap-1 whitespace-nowrap rounded-l px-[11px] py-1 text-sm ${
                      notification.inApp
                        ? "bg-primary-1 text-white"
                        : "bg-neutral-700 text-neutral-400"
                    }`}
                  >
                    <FaMobile />
                    In-app
                  </button>
                  <button
                    onClick={() =>
                      toggleNotification("general", notification.id, "email")
                    }
                    className={`flex h-[30px] items-center gap-1 whitespace-nowrap rounded-r px-[11px] py-1 text-sm ${
                      notification.email
                        ? "bg-primary-1 text-white"
                        : "bg-neutral-700 text-neutral-400"
                    }`}
                  >
                    <IoMdMail />
                    Email
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Notifications Section */}
        <div className="mt-12">
          <h2 className="text-base font-medium">Summary notifications</h2>
          <p className="text text-sm font-medium text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipiscing.
          </p>
          <div className="mt-6 space-y-10 rounded-xl border border-darkGray bg-neutral-600 p-4">
            {notifications.summary.map((notification) => (
              <div
                key={notification.id}
                className="flex items-center justify-between"
              >
                <span className="text-sm">{notification.text}</span>
                <div className="flex rounded">
                  <button
                    onClick={() =>
                      toggleNotification("summary", notification.id, "inApp")
                    }
                    className={`flex h-[30px] items-center gap-1 whitespace-nowrap rounded-l px-[11px] py-1 text-sm ${
                      notification.inApp
                        ? "bg-primary-1 text-white"
                        : "bg-neutral-700 text-neutral-400"
                    }`}
                  >
                    <FaMobile />
                    In-app
                  </button>
                  <button
                    onClick={() =>
                      toggleNotification("summary", notification.id, "email")
                    }
                    className={`flex h-[30px] items-center gap-1 whitespace-nowrap rounded-r px-[11px] py-1 text-sm ${
                      notification.email
                        ? "bg-primary-1 text-white"
                        : "bg-neutral-700 text-neutral-400"
                    }`}
                  >
                    <IoMdMail />
                    Email
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add User Button */}
        <div className="mt-[50px] flex justify-end">
          <button className="flex h-[46px] items-center justify-center rounded bg-primary-1 px-[61px] text-base font-medium text-white">
            Add User
          </button>
        </div>
      </div>
    </>
  );
};

export default NotificationSettings;
