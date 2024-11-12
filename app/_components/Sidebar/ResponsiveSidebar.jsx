"use client";
import React, { useState } from "react";
import DashboardIcon from "../Icons/DashboardIcon";
import StarIcon from "../Icons/StarIcon";
import UserIcon from "../Icons/UserIcon";
import PricingIcon from "../Icons/PricingIcon";
import IntegrationIcon from "../Icons/IntegrationIcon";
import { SettingIcon } from "../Icons/SettingIcon";
import TempIcon from "../Icons/TempIcon";
import Image from "next/image";
import Link from "next/link";

const ResponsiveSidebar = () => {
  const menuItems = [
    {
      label: "Dashboard",
      icon: <DashboardIcon />,
      subitems: [
        { label: "All pages", link: "/dashboard/all-pages" },
        { label: "Reports", link: "/analytics" },
        { label: "Products", link: "/dashboard/products" },
        { label: "Analytics2", link: "/dashboard/reports" },
      ],
    },
    {
      label: "Features",
      icon: <StarIcon />,
      subitems: [
        { label: "All pages", link: "/analytics" },
        { label: "Contacts", link: "/dashboard/kanban" },
        { label: "Companies", link: "/analytics" },
        { label: "Projects", link: "/dashboard/item3" },
        { label: "Tasks", link: "/analytics" },
        { label: "Board", link: "/dashboard/kanban" },
        { label: "Table", link: "/analytics" },
        { label: "Calender", link: "/calender" },
        { label: "Chat", link: "/chat" },
      ],
    },
    {
      label: "Users",
      icon: <UserIcon />,
      subitems: [
        { label: "All Users", link: "/users" },
        { label: "Add Users", link: "/add-users" },
      ],
    },
    {
      label: "Pricing",
      icon: <PricingIcon />,
      subitems: [{ label: "Add Users", link: "/users/add-users" }],
      subitems: [{ label: "All Users", link: "/users" }],
    },
    {
      label: "Integrations",
      icon: <IntegrationIcon />,
      subitems: [{ label: "Item 1", link: "/dashboard/kanban" }],
    },
  ];

  const settingsItems = [
    {
      label: "Settings",
      icon: <SettingIcon />,
      subitems: [
        { label: "All pages", link: "/analytics" },
        { label: "Contacts", link: "/dashboard/kanban" },
        { label: "Companies", link: "/analytics" },
        { label: "Projects", link: "/dashboard/item3" },
        { label: "Tasks", link: "/analytics" },
        { label: "Board", link: "/dashboard/kanban" },
        { label: "Table", link: "/analytics" },
        { label: "Calender", link: "/calender" },
        { label: "Chat", link: "/chat" },
      ],
    },
    {
      label: "Template pages",
      icon: <TempIcon />,
      subitems: [
        { label: "All pages", link: "/dashboard/all-pages" },
        { label: "Reports", link: "/analytics" },
        { label: "Products", link: "/dashboard/products" },
        { label: "Task", link: "/dashboard/reports" },
      ],
    },
  ];

  const [hoveredMenu, setHoveredMenu] = useState(null);

  const handleMouseEnter = (label) => {
    setHoveredMenu(label);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  return (
    <>
      <div className="SideBarShadow h-[900px] w-14 py-[38px]">
        <Link
          href="/"
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
              <div
                onClick={() => toggleDropdown(item.label)}
                className="flex h-[42px] cursor-pointer items-center justify-center"
              >
                <div
                  className={`${
                    hoveredMenu === item.label
                      ? "font-medium text-primary-1"
                      : "text-neutral-400 hover:text-primary-1"
                  }`}
                >
                  <p>
                    {React.cloneElement(item.icon, {
                      color: hoveredMenu === item.label ? "#CB3CFF" : "#AEB9E1",
                    })}
                  </p>
                </div>
              </div>
              {/* Sub Items */}
              {hoveredMenu === item.label && (
                <ul className="SideBarShadow absolute left-4 top-4 z-[999] w-48 rounded-md bg-neutral-600 p-2 shadow-lg transition-all duration-300 ease-in-out">
                  {item.subitems.map((subitem) => (
                    <li
                      key={subitem.label}
                      className="bg-neutral-600 p-2 text-neutral-400 duration-300 ease-in-out hover:text-white"
                    >
                      <Link href={subitem.link}>{subitem.label}</Link>
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
              <div
                onClick={() => toggleDropdown(item.label)}
                className="flex h-[42px] cursor-pointer items-center justify-center"
              >
                <div
                  className={`${
                    hoveredMenu === item.label
                      ? "font-medium text-primary-1"
                      : "text-neutral-400"
                  }`}
                >
                  <p>
                    {React.cloneElement(item.icon, {
                      color: hoveredMenu === item.label ? "#CB3CFF" : "#AEB9E1",
                    })}
                  </p>
                </div>
              </div>
              {/* Sub Items */}
              {hoveredMenu === item.label && (
                <ul className="SideBarShadow absolute left-10 top-4 z-[999] w-48 rounded-md bg-neutral-600 p-2 shadow-lg transition-all duration-300 ease-in-out">
                  {item.subitems.map((subitem) => (
                    <li
                      key={subitem.label}
                      className="bg-neutral-600 p-2 text-neutral-400 duration-300 ease-in-out hover:text-white"
                    >
                      <Link href={subitem.link}>{subitem.label}</Link>
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
    </>
  );
};

export default ResponsiveSidebar;
