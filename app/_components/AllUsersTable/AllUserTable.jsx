"use client";
import React, { useState } from "react";
import CompleteIcon from "../Icons/CompleteIcon";
import UserIcon from "../Icons/UserIcon";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { FaLocationDot, FaPhone, FaSquareCheck } from "react-icons/fa6";
import { BsBagFill } from "react-icons/bs";
import Image from "next/image";
import { HiMiniPencil } from "react-icons/hi2";
import { AiFillDelete } from "react-icons/ai";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const AllUserTable = () => {
  const usersData = [
    {
      id: 1,
      name: "John Carter",
      email: "john@google.com",
      phone: "(414) 907 - 1274",
      country: "United States",
      company: "Google",
      avatar: "/images/Group 39488.png",
      companyLogo: "/images/Google@2x.svg",
      online: true,
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "jane@google.com",
      phone: "(414) 907 - 1275",
      country: "United States",
      company: "Facebook",
      avatar: "/images/Group 39488.png",
      companyLogo: "/images/Google@2x.svg",
      online: false,
    },
    {
      id: 3,
      name: "Mike Ross",
      email: "mike@google.com",
      phone: "(414) 907 - 1276",
      country: "United States",
      company: "Amazon",
      avatar: "/images/Group 39488.png",
      companyLogo: "/images/Google@2x.svg",
      online: true,
    },
    {
      id: 4,
      name: "Rachel Zane",
      email: "rachel@google.com",
      phone: "(414) 907 - 1277",
      country: "United States",
      company: "Netflix",
      avatar: "/images/Group 39488.png",
      companyLogo: "/images/Google@2x.svg",
      online: true,
    },
    {
      id: 5,
      name: "Harvey Specter",
      email: "harvey@google.com",
      phone: "(414) 907 - 1278",
      country: "United States",
      company: "LinkedIn",
      avatar: "/images/Group 39488.png",
      companyLogo: "/images/Google@2x.svg",
      online: false,
    },
    {
      id: 6,
      name: "Jessica Pearson",
      email: "jessica@google.com",
      phone: "(414) 907 - 1279",
      country: "United States",
      company: "Apple",
      avatar: "/images/Group 39488.png",
      companyLogo: "/images/Google@2x.svg",
      online: true,
    },
    {
      id: 7,
      name: "Katrina Bennett",
      email: "katrina@google.com",
      phone: "(414) 907 - 1280",
      country: "United States",
      company: "Microsoft",
      avatar: "/images/Group 39488.png",
      companyLogo: "/images/Google@2x.svg",
      online: false,
    },
    {
      id: 8,
      name: "Louis Litt",
      email: "louis@google.com",
      phone: "(414) 907 - 1281",
      country: "United States",
      company: "Twitter",
      avatar: "/images/Group 39488.png",
      companyLogo: "/images/Google@2x.svg",
      online: true,
    },
    {
      id: 9,
      name: "Daniel Hardman",
      email: "daniel@google.com",
      phone: "(414) 907 - 1282",
      country: "United States",
      company: "Tesla",
      avatar: "/images/Group 39488.png",
      companyLogo: "/images/Google@2x.svg",
      online: true,
    },
    {
      id: 10,
      name: "Gina Torres",
      email: "gina@google.com",
      phone: "(414) 907 - 1283",
      country: "United States",
      company: "Spotify",
      avatar: "/images/Group 39488.png",
      companyLogo: "/images/Google@2x.svg",
      online: false,
    },
  ];

  return (
    <>
      <div className="mt-[30px] rounded-xl border border-darkGray bg-neutral-600">
        <div className="flex items-center justify-between border-b border-darkGray px-9 py-5">
          <h2 className="text-base font-medium">All Users</h2>
          <p className="text-sm font-medium">
            <span className="text-primary-1">1 - 10 </span>{" "}
            <span className="text-neutral-400"> of 256 </span>
          </p>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full table-fixed text-center">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="w-[65px] px-6 py-3 text-xs font-medium leading-[14px] tracking-wider"
                >
                  {" "}
                  <CompleteIcon />
                </th>
                <th scope="col" className="w-[160px] py-3">
                  <div className="flex items-center gap-1 whitespace-nowrap">
                    <UserIcon className="flex-shrink-0 text-neutral-400" />
                    <h4 className="text-sm font-medium"> Name </h4>
                    <div className="cursor-pointer -space-y-1.5 pl-0.5 text-base text-neutral-400">
                      <MdKeyboardArrowUp />
                      <MdKeyboardArrowDown />
                    </div>
                  </div>
                </th>
                <th scope="col" className="w-[160px] py-3">
                  <div className="flex items-center gap-1 whitespace-nowrap">
                    <FaPhone className="flex-shrink-0 text-neutral-400" />
                    <h4 className="text-sm font-medium"> Phone </h4>
                    <div className="cursor-pointer -space-y-1.5 pl-0.5 text-base text-neutral-400">
                      <MdKeyboardArrowUp />
                      <MdKeyboardArrowDown />
                    </div>
                  </div>
                </th>
                <th scope="col" className="w-[160px] py-3">
                  <div className="flex items-center gap-1 whitespace-nowrap">
                    <FaLocationDot className="flex-shrink-0 text-neutral-400" />
                    <h4 className="text-sm font-medium"> Location </h4>
                    <div className="cursor-pointer -space-y-1.5 pl-0.5 text-base text-neutral-400">
                      <MdKeyboardArrowUp />
                      <MdKeyboardArrowDown />
                    </div>
                  </div>
                </th>
                <th scope="col" className="w-[160px] py-3">
                  <div className="flex items-center gap-1 whitespace-nowrap">
                    <BsBagFill className="flex-shrink-0 text-neutral-400" />
                    <h4 className="text-sm font-medium"> Company </h4>
                    <div className="cursor-pointer -space-y-1.5 pl-0.5 text-base text-neutral-400">
                      <MdKeyboardArrowUp />
                      <MdKeyboardArrowDown />
                    </div>
                  </div>
                </th>
                <th scope="col" className="w-[160px] py-3">
                  <div className="flex items-center gap-1 whitespace-nowrap">
                    <FaSquareCheck className="flex-shrink-0 text-neutral-400" />
                    <h4 className="text-sm font-medium"> Status </h4>
                    <div className="cursor-pointer -space-y-1.5 pl-0.5 text-base text-neutral-400">
                      <MdKeyboardArrowUp />
                      <MdKeyboardArrowDown />
                    </div>
                  </div>
                </th>
                <th
                  scope="col"
                  className="w-[80px] py-3 text-xs font-medium leading-[14px] tracking-wider"
                ></th>
              </tr>
            </thead>
            <tbody>
              {usersData.map((user, index) => (
                <tr
                  key={user.id}
                  className={`w-full rounded-b-xl ${index % 2 === 0 ? "bg-neutral-700" : "bg-neutral-600"}`}
                >
                  <td className="w-full rounded-l-xl py-1">
                    <div className="flex items-center justify-center">
                      <label className="relative cursor-pointer items-center">
                        <input
                          type="checkbox"
                          className="peer size-[14px] cursor-pointer appearance-none rounded-sm border border-darkGray shadow transition-all checked:border-primary-1 checked:bg-primary-1 hover:shadow-md"
                          id={`check${user.id}`}
                        />
                        <span className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform text-white opacity-0 peer-checked:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth="1"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </label>
                    </div>
                  </td>
                  <td className="py-2.5">
                    <div className="flex items-center">
                      <div className="flex gap-2">
                        <div className="size-8">
                          <Image
                            width={32}
                            height={32}
                            unoptimized
                            src={user.avatar}
                            alt={user.name}
                          />
                        </div>
                        <div>
                          <h4 className="text-start text-sm font-medium">
                            {user.name}
                          </h4>
                          <p className="text-xs font-medium text-neutral-400">
                            {user.email}
                          </p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-2.5">
                    <p className="text-left text-xs font-medium text-neutral-400">
                      {user.phone}
                    </p>
                  </td>
                  <td className="py-2.5">
                    <p className="text-left text-xs font-medium text-neutral-400">
                      {user.country}
                    </p>
                  </td>
                  <td className="py-2.5">
                    <div className="flex items-center gap-1 text-left">
                      <div>
                        <Image
                          width={20}
                          height={20}
                          src={user.companyLogo}
                          alt={user.company}
                          className="h-full w-full"
                        />
                      </div>
                      <p className="text-xs font-medium text-neutral-400">
                        {user.company}
                      </p>
                    </div>
                  </td>
                  <td className="py-2.5">
                    <button
                      className={`border-${user.online ? "success-light" : "neutral-400"} bg-${user.online ? "success-light" : "neutral-600"} flex h-5 items-center justify-center rounded-sm border px-1.5 text-[10px] text-sm font-medium text-success`}
                    >
                      <span> . </span>
                      {user.online ? "online" : "offline"}
                    </button>
                  </td>
                  <td className="rounded-r-xl py-2.5">
                    <div className="flex items-center gap-2">
                      <HiMiniPencil className="cursor-pointer" />
                      <AiFillDelete className="cursor-pointer" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-5 flex flex-col justify-between md:flex-row md:items-center">
        <div>
          <p className="text-xs font-medium leading-5">1 - 10 of 460</p>
        </div>
        <div className="flex items-center gap-14">
          <div className="flex items-center gap-3">
            <p className="text-xs font-medium text-neutral-400">
              Rows per page:
            </p>

            <form className="mx-auto max-w-sm">
              <label
                htmlFor="pages"
                className="sr-only mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Select an option
              </label>
              <select
                id="pages"
                className="block h-8 w-full rounded-lg border border-[#10193466] bg-neutral-600 px-2.5 text-sm text-neutral-300 outline-none"
              >
                <option defaultValue>10</option>
                <option value="20">20</option>
                <option value="40">40</option>
                <option value="50">50</option>
                <option value="60">60</option>
              </select>
            </form>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex size-7 items-center justify-center rounded border border-[#10193466] bg-neutral-600 text-lg text-neutral-400">
              <FiArrowLeft />
            </button>
            <button className="flex size-7 items-center justify-center rounded border border-[#10193466] bg-neutral-600 text-lg text-neutral-400">
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllUserTable;
