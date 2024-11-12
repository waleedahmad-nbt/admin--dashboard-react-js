import React from "react";
import CompleteIcon from "../Icons/CompleteIcon";
import UserIcon from "../Icons/UserIcon";
import { FaLocationDot, FaPhone, FaSquareCheck } from "react-icons/fa6";
import { BsBagFill } from "react-icons/bs";
import { HiMiniPencil } from "react-icons/hi2";
import { AiFillDelete } from "react-icons/ai";
import { GoArrowDown } from "react-icons/go";
import { CiCalendarDate } from "react-icons/ci";

const OrderStatus = () => {
  const usersData = [
    {
      id: 1,
      name: "John Carter",
      email: "john@google.com",
      date: "Jan 30, 2024",
      country: "United States",
      company: "$ 1,099.24",
      avatar: "/images/Group 39488.png",
      companyLogo: "/images/Google@2x.svg",
      online: true,
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "jane@google.com",
      date: "Jan 30, 2024",
      country: "United States",
      company: "$ 1,099.24",
      avatar: "/images/Group 39488.png",
      companyLogo: "/images/Google@2x.svg",
      online: false,
    },
    {
      id: 3,
      name: "Mike Ross",
      email: "mike@google.com",
      date: "Jan 30, 2024",
      country: "United States",
      company: "$ 1,099.24",
      avatar: "/images/Group 39488.png",
      companyLogo: "/images/Google@2x.svg",
      online: true,
    },
    {
      id: 4,
      name: "Rachel Zane",
      email: "rachel@google.com",
      date: "Jan 30, 2024",
      country: "United States",
      company: "$ 1,099.24",
      avatar: "/images/Group 39488.png",
      companyLogo: "/images/Google@2x.svg",
      online: true,
    },
    {
      id: 5,
      name: "Harvey Specter",
      email: "harvey@google.com",
      date: "Jan 30, 2024",
      country: "United States",
      company: "$ 1,099.24",
      avatar: "/images/Group 39488.png",
      companyLogo: "/images/Google@2x.svg",
      online: false,
    },
    {
      id: 6,
      name: "Jessica Pearson",
      email: "jessica@google.com",
      date: "Jan 30, 2024",
      country: "United States",
      company: "$ 1,099.24",
      avatar: "/images/Group 39488.png",
      companyLogo: "/images/Google@2x.svg",
      online: true,
    },
  ];
  return (
    <>
      <div className="mt-[30px] rounded-xl border border-darkGray bg-neutral-600">
        <div className="flex flex-col justify-between space-y-2 px-4 py-5 md:flex-row md:items-center lg:px-6">
          <h2 className="text-base font-medium">Orders Status</h2>
          <div className="flex items-center gap-3">
            <button className="flex h-[30px] w-full items-center justify-center gap-1 whitespace-pre rounded bg-neutral-700 p-2 text-xs font-medium leading-[14px]">
              Export data
              <GoArrowDown className="text-lg" />
            </button>
            <button className="flex h-[30px] w-full items-center justify-center gap-1 whitespace-pre rounded bg-primary-1 p-2 text-xs font-medium leading-[14px]">
              Create report
            </button>
          </div>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full table-fixed text-center">
            <thead>
              <tr>
                <th scope="col" className="w-[100px] py-3">
                  <div className="flex items-center justify-center gap-1.5 text-xs font-medium leading-[14px] tracking-wider">
                    <div>
                      <CompleteIcon />
                    </div>
                    <div>
                      <p>Order</p>
                    </div>
                  </div>
                </th>
                <th scope="col" className="w-[280px] py-3">
                  <div className="flex w-full items-center gap-1 whitespace-nowrap">
                    <UserIcon className="flex-shrink-0 text-neutral-400" />
                    <h4 className="text-sm font-medium"> Client </h4>
                  </div>
                </th>
                <th scope="col" className="w-[130px] py-3">
                  <div className="flex items-center gap-1 whitespace-nowrap">
                    <CiCalendarDate className="flex-shrink-0 text-neutral-400" />
                    <h4 className="text-sm font-medium"> Date </h4>
                  </div>
                </th>
                <th scope="col" className="w-[140px] py-3">
                  <div className="flex items-center gap-1 whitespace-nowrap">
                    <FaSquareCheck className="flex-shrink-0 text-neutral-400" />
                    <h4 className="text-sm font-medium"> Status </h4>
                  </div>
                </th>
                <th scope="col" className="w-[140px] py-3">
                  <div className="flex items-center gap-1 whitespace-nowrap">
                    <FaLocationDot className="flex-shrink-0 text-neutral-400" />
                    <h4 className="text-sm font-medium"> Country </h4>
                  </div>
                </th>
                <th scope="col" className="w-[120px] py-3">
                  <div className="flex items-center gap-1 whitespace-nowrap">
                    <BsBagFill className="flex-shrink-0 text-neutral-400" />
                    <h4 className="text-sm font-medium"> Total </h4>
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
                  <td className="w-full py-1">
                    <div className="flex w-full items-center justify-center">
                      <label className="relative w-full cursor-pointer items-center justify-center">
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
                      {user.date}
                    </p>
                  </td>
                  <td className="py-2.5">
                    <button
                      className={`border-${user.online ? "success-light" : "neutral-400"} bg-${user.online ? "success-light" : "neutral-600"} flex h-5 items-center justify-center rounded-sm border px-1.5 text-[10px] text-sm font-medium text-success`}
                    >
                      <span> . </span>
                      {user.online ? "online" : "offline"}
                    </button>
                  </td>
                  <td className="py-2.5">
                    <p className="text-left text-xs font-medium text-neutral-400">
                      {user.country}
                    </p>
                  </td>
                  <td className="py-2.5">
                    <div className="flex items-center gap-1 text-left">
                      <p className="text-xs font-medium text-neutral-400">
                        {user.company}
                      </p>
                    </div>
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
    </>
  );
};

export default OrderStatus;
