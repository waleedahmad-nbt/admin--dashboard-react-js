"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import CompleteIcon from "../Icons/CompleteIcon";
import UserIcon from "../Icons/UserIcon";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { FaSquareCheck } from "react-icons/fa6";
import { BsBagFill } from "react-icons/bs";
import { HiMiniPencil } from "react-icons/hi2";
import { AiFillDelete } from "react-icons/ai";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { LuShoppingBag } from "react-icons/lu";
import { TbCurrencyDollar } from "react-icons/tb";

const ProductsList = () => {
  const usersData = [
    {
      id: 1,
      name: "Watch",
      email: "john@google.com",
      category: "Accessories",
      price: 30,
      company: "Google",
      avatar: "/images/watch.png",
      companyLogo: "/images/Google@2x.svg",
      online: true,
    },
    {
      id: 2,
      name: "Mobile",
      email: "jane@google.com",
      category: "Telecommunication",
      price: 30,
      company: "Facebook",
      avatar: "/images/Photo.png",
      companyLogo: "/images/Google@2x.svg",
      online: false,
    },
    {
      id: 3,
      name: "Watch",
      email: "mike@google.com",
      category: "Accessories",
      price: 30,
      company: "Amazon",
      avatar: "/images/watch.png",
      companyLogo: "/images/Google@2x.svg",
      online: true,
    },
    {
      id: 4,
      name: "Mobile",
      email: "rachel@google.com",
      category: "Telecommunication",
      price: 30,
      company: "Netflix",
      avatar: "/images/Photo.png",
      companyLogo: "/images/Google@2x.svg",
      online: true,
    },
    {
      id: 5,
      name: "Watch",
      email: "harvey@google.com",
      category: "Accessories",
      price: 30,
      company: "LinkedIn",
      avatar: "/images/watch.png",
      companyLogo: "/images/Google@2x.svg",
      online: false,
    },
    {
      id: 6,
      name: "Mobile",
      email: "jessica@google.com",
      category: "Telecommunication",
      price: 30,
      company: "Apple",
      avatar: "/images/watch.png",
      companyLogo: "/images/Google@2x.svg",
      online: true,
    },
    {
      id: 7,
      name: "Watch",
      email: "katrina@google.com",
      category: "Accessories",
      price: 30,
      company: "Microsoft",
      avatar: "/images/Photo.png",
      companyLogo: "/images/Google@2x.svg",
      online: false,
    },
    {
      id: 8,
      name: "Watch",
      email: "louis@google.com",
      category: "Telecommunication",
      price: 30,
      company: "Twitter",
      avatar: "/images/watch.png",
      companyLogo: "/images/Google@2x.svg",
      online: true,
    },
    {
      id: 9,
      name: "Mobile",
      email: "daniel@google.com",
      category: "Accessories",
      price: 30,
      company: "Tesla",
      avatar: "/images/Photo.png",
      companyLogo: "/images/Google@2x.svg",
      online: true,
    },
    {
      id: 10,
      name: "Watch",
      email: "gina@google.com",
      category: "Telecommunication",
      price: 30,
      company: "Spotify",
      avatar: "/images/Photo.png",
      companyLogo: "/images/Google@2x.svg",
      online: false,
    },
  ];
  return (
    <>
      <div className="px-11">
        <div className="flex items-center justify-between">
          <div className="flex w-full items-center gap-12">
            <h2 className="text-xl font-semibold">Product List</h2>
            <div className="relative w-full max-w-[352px]">
              <input
                type="search"
                name="search"
                id="search"
                className="h-[42px] w-full rounded border border-darkGray bg-neutral-600 ps-9 text-xs text-neutral-400 outline-none"
                placeholder="Search for product..."
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
          <Link
            href="/add-users"
            className="flex h-[30px] items-center justify-center whitespace-nowrap rounded bg-primary-1 px-4 text-xs font-medium text-white"
          >
            Add New Product
          </Link>
        </div>
        <div className="mt-[30px] rounded-xl border border-darkGray bg-neutral-600">
          <div className="flex items-center justify-between border-b border-darkGray px-9 py-5">
            <h2 className="text-base font-medium">All Products</h2>
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
                      <h4 className="text-sm font-medium"> Product Name </h4>
                      <div className="cursor-pointer -space-y-1.5 pl-0.5 text-base text-neutral-400">
                        <MdKeyboardArrowUp />
                        <MdKeyboardArrowDown />
                      </div>
                    </div>
                  </th>
                  <th scope="col" className="w-[160px] py-3">
                    <div className="flex items-center justify-center gap-1 whitespace-nowrap">
                      <LuShoppingBag className="flex-shrink-0 text-neutral-400" />
                      <h4 className="text-sm font-medium"> Category </h4>
                      <div className="cursor-pointer -space-y-1.5 pl-0.5 text-base text-neutral-400">
                        <MdKeyboardArrowUp />
                        <MdKeyboardArrowDown />
                      </div>
                    </div>
                  </th>
                  <th scope="col" className="w-[160px] py-3 text-center">
                    <div className="flex items-center justify-center gap-1 whitespace-nowrap text-center">
                      <TbCurrencyDollar className="flex-shrink-0 text-neutral-400" />
                      <h4 className="text-sm font-medium"> Price </h4>
                      <div className="cursor-pointer -space-y-1.5 pl-0.5 text-base text-neutral-400">
                        <MdKeyboardArrowUp />
                        <MdKeyboardArrowDown />
                      </div>
                    </div>
                  </th>
                  <th scope="col" className="w-[160px] py-3">
                    <div className="flex items-center justify-center gap-1 whitespace-nowrap">
                      <BsBagFill className="flex-shrink-0 text-neutral-400" />
                      <h4 className="text-sm font-medium"> Company </h4>
                      <div className="cursor-pointer -space-y-1.5 pl-0.5 text-base text-neutral-400">
                        <MdKeyboardArrowUp />
                        <MdKeyboardArrowDown />
                      </div>
                    </div>
                  </th>
                  <th scope="col" className="w-[160px] py-3">
                    <div className="flex items-center justify-center gap-1 whitespace-nowrap text-center">
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
                          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white opacity-0 peer-checked:opacity-100">
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
                          <div className="size-8 rounded-full bg-primary-1">
                            <Image
                              width={32}
                              height={32}
                              unoptimized
                              src={user.avatar}
                              alt={user.name}
                              className="h-full w-full rounded-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="text-start text-sm font-medium">
                              {user.name}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-2.5">
                      <p className="text-center text-xs font-medium text-neutral-400">
                        {user.category}
                      </p>
                    </td>
                    <td className="py-2.5">
                      <p className="text-center text-xs font-medium text-neutral-400">
                        <span>$</span> {user.price}
                      </p>
                    </td>
                    <td className="py-2.5">
                      <div className="flex items-center justify-center gap-1 text-center">
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
                        className={`mx-auto flex h-5 items-center justify-center rounded-sm border px-1.5 text-[10px] text-sm font-medium text-success border-${user.online ? "success-light" : "neutral-400"} bg-${user.online ? "success-light" : "neutral-600"} `}
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

        <div className="mt-5 flex items-center justify-between">
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
      </div>
    </>
  );
};

export default ProductsList;
