"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import Sidelink from "./SubSideLinks";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import DashboardIcon from "../Icons/DashboardIcon";
import PricingIcon from "../Icons/PricingIcon";
import UserIcon from "../Icons/UserIcon";
import IntegrationIcon from "../Icons/IntegrationIcon";
import StarIcon from "../Icons/StarIcon";
import TempIcon from "../Icons/TempIcon";
import { SettingIcon } from "../Icons/SettingIcon";
import SearchInput from "../SearchInput/SearchInput";

const menuItems = [
  {
    label: "Dashboard",
    icon: <DashboardIcon />,
    subitems: [
      { label: "All pages", link: "/dashboard/all-pages" },
      { label: "Reports", link: "/analytics" },
      { label: "Products", link: "/dashboard/products" },
      { label: "Task", link: "/dashboard/reports" },
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

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({});

  const toggleDropdown = (label) => {
    setOpenMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <>
      <div className="SideBarShadow h-full w-[300px] py-[38px]">
        <div className="flex items-center justify-between px-7">
          <Link href="/" className="flex cursor-pointer items-center gap-1.5">
            <Image
              width={26}
              height={26}
              src="/images/Logo Icon.svg"
              alt="logo"
            />
            <h2 className="text-xl font-semibold leading-[22px]">Dashdark X</h2>
          </Link>
          <div className="flex items-center text-neutral-400">
            <MdChevronLeft className="cursor-pointer" />
            <MdChevronRight className="cursor-pointer" />
          </div>
        </div>
        <div className="mt-10 px-7">
          <SearchInput />
        </div>
        <div className="mt-[29px] px-7">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.label}>
                {/* main items  */}
                <div
                  onClick={() => toggleDropdown(item.label)}
                  className="flex h-[42px] w-full cursor-pointer items-center justify-between"
                >
                  <div
                    className={`flex items-center gap-1 ${
                      openMenus[item.label]
                        ? "font-medium text-primary-1"
                        : "text-neutral-400"
                    }`}
                  >
                    <p>
                      {React.cloneElement(item.icon, {
                        color: openMenus[item.label] ? "#CB3CFF" : "#AEB9E1",
                      })}
                    </p>
                    <h4 className="text-sm font-medium leading-4">
                      {item.label}
                    </h4>
                  </div>
                  <div>
                    {item.subitems.length > 0 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleDropdown(item.label);
                        }}
                      >
                        {openMenus[item.label] ? (
                          <IoIosArrowUp className="text-neutral-400" />
                        ) : (
                          <MdChevronRight className="text-neutral-400" />
                        )}
                      </button>
                    )}
                  </div>
                </div>
                <ul
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openMenus[item.label] ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  {item.subitems.map((subitem) => (
                    <Sidelink key={subitem.label} href={subitem.link}>
                      {subitem.label}
                    </Sidelink>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 border-t border-darkGray px-7 pb-5">
          <ul className="mt-5 space-y-1">
            {settingsItems.map((item) => (
              <li key={item.label}>
                {/* main items  */}
                <div
                  onClick={() => toggleDropdown(item.label)}
                  className="flex h-[42px] w-full cursor-pointer items-center justify-between"
                >
                  <div
                    className={`flex items-center gap-1 ${
                      openMenus[item.label]
                        ? "font-medium text-primary-1"
                        : "text-neutral-400"
                    }`}
                  >
                    <p>
                      {React.cloneElement(item.icon, {
                        color: openMenus[item.label] ? "#CB3CFF" : "#AEB9E1",
                      })}
                    </p>
                    <h4 className="text-sm font-medium leading-4">
                      {item.label}
                    </h4>
                  </div>
                  <div>
                    {item.subitems.length > 0 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleDropdown(item.label);
                        }}
                      >
                        {openMenus[item.label] ? (
                          <IoIosArrowUp className="text-neutral-400" />
                        ) : (
                          <MdChevronRight className="text-neutral-400" />
                        )}
                      </button>
                    )}
                  </div>
                </div>
                <ul
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openMenus[item.label] ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  {item.subitems.map((subitem) => (
                    <Sidelink key={subitem.label} href={subitem.link}>
                      {subitem.label}
                    </Sidelink>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className="px-7">
          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="size-8">
                <Image
                  width={32}
                  height={32}
                  unoptimized
                  src="/images/Group 39488.png"
                  alt="rofike"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-sm font-medium">John Carter</h4>
                <p className="text-xs font-medium text-neutral-400">
                  Account settings
                </p>
              </div>
            </div>
            <div className="cursor-pointer">
              <MdChevronRight className="text-neutral-400" />
            </div>
          </div>
          <div>
            <button
              type="button"
              className="BtnGradient mt-16 flex h-[46px] w-full items-center justify-center gap-2.5 rounded"
            >
              Get template <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
