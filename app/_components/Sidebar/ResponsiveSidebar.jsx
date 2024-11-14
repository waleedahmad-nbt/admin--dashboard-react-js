"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { menuItems, settingsItems } from "@/app/Data/SidebarItems";
import { RiArrowLeftLine, RiMenu3Line } from "react-icons/ri";

const ResponsiveSidebar = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMouseEnter = (label) => {
    setHoveredMenu(label);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      {/* Menu Icon for smaller screens */}
      <div
        className={`absolute left-0 top-0 z-[100] hidden h-full transition-all duration-300 ease-in-out max-md:block ${
          isSidebarOpen ? "left-14" : "left-0"
        }`}
      >
        <div
          onClick={toggleSidebar}
          className="flex size-10 cursor-pointer items-center justify-center rounded-r-full bg-secondary-5 text-xl text-primary-1 duration-300 ease-in-out hover:bg-primary-1 hover:text-white"
        >
          {isSidebarOpen ? <RiArrowLeftLine /> : <RiMenu3Line />}
        </div>
      </div>

      <div
        className={`SideBarShadow sidebar h-full py-[38px] ${
          isSidebarOpen ? "w-14 opacity-100" : "w-0 max-md:opacity-0"
        } z-[1000] transition-all duration-300 max-md:fixed max-md:left-0 max-md:top-0 max-md:z-40 max-md:bg-neutral-700 md:block md:w-14`}
      >
        <div>
          <Link
            href="/"
            onClick={toggleSidebar}
            className="flex cursor-pointer items-center justify-center gap-1.5"
          >
            <Image
              width={26}
              height={26}
              src="/images/Logo Icon.svg"
              alt="logo"
            />
          </Link>
          <ul className="mx-auto mt-[29px] flex w-full flex-col items-center justify-center space-y-1">
            {menuItems.map((item) => (
              <li
                key={item.label}
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                {/* main items  */}
                <div className="flex h-[42px] cursor-pointer items-center justify-center">
                  <div
                    className={`${
                      hoveredMenu === item.label
                        ? "font-medium text-primary-1"
                        : "text-neutral-400 hover:text-primary-1"
                    }`}
                  >
                    <p>
                      {React.cloneElement(item.icon, {
                        color:
                          hoveredMenu === item.label ? "#CB3CFF" : "#AEB9E1",
                      })}
                    </p>
                  </div>
                </div>
                {/* Sub Items */}
                {hoveredMenu === item.label && (
                  <ul className="SideBarShadow absolute left-4 top-4 z-[100] w-48 rounded-md bg-neutral-600 p-2 shadow-lg transition-all duration-300 ease-in-out">
                    {item.subitems.map((subitem) => (
                      <li
                        key={subitem.label}
                        className="bg-neutral-600 p-2 text-neutral-400 duration-300 ease-in-out hover:text-white"
                      >
                        <Link onClick={toggleSidebar} href={subitem.link}>
                          {subitem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <ul className="mt-5 space-y-1 border-t border-darkGray py-5">
            {settingsItems.map((item) => (
              <li
                key={item.label}
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                {/* main items  */}
                <div className="flex h-[42px] cursor-pointer items-center justify-center">
                  <div
                    className={`${
                      hoveredMenu === item.label
                        ? "font-medium text-primary-1"
                        : "text-neutral-400"
                    }`}
                  >
                    <p>
                      {React.cloneElement(item.icon, {
                        color:
                          hoveredMenu === item.label ? "#CB3CFF" : "#AEB9E1",
                      })}
                    </p>
                  </div>
                </div>
                {/* Sub Items */}
                {hoveredMenu === item.label && (
                  <ul className="SideBarShadow absolute left-10 top-4 z-[100] w-48 rounded-md bg-neutral-600 p-2 shadow-lg transition-all duration-300 ease-in-out">
                    {item.subitems.map((subitem) => (
                      <li
                        key={subitem.label}
                        className="bg-neutral-600 p-2 text-neutral-400 duration-300 ease-in-out hover:text-white"
                      >
                        <Link onClick={toggleSidebar} href={subitem.link}>
                          {subitem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="mx-auto flex size-8 items-center justify-center">
            <Image
              width={32}
              height={32}
              unoptimized
              src="/images/Group 39488.png"
              alt="rofike"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* Overlay for sidebar on smaller screens */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black opacity-50 max-md:block md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default ResponsiveSidebar;
