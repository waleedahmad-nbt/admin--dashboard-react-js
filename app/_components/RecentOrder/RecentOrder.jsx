import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import CalenderIcon from "../Icons/CalenderIcon";
import Image from "next/image";
import CompleteIcon from "../Icons/CompleteIcon";
import { FaSquareCheck, FaTimeline } from "react-icons/fa6";
import { BsBagFill } from "react-icons/bs";

const RecentOrder = () => {
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
  ];
  return (
    <>
      <div className="rounded-xl bg-neutral-600 py-5">
        <div className="mb-4 flex items-center justify-between px-7">
          <div>
            <h3 className="text-base font-medium">Recent orders</h3>
          </div>
          <div className="Shadowmonth flex cursor-pointer items-center justify-center gap-3 rounded bg-neutral-700 p-[9px] text-neutral-400">
            <div className="flex items-center gap-1">
              <CalenderIcon />
              <p className="text-[10px] font-medium">Jan 2024 </p>
            </div>
            <MdKeyboardArrowDown />
          </div>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full table-fixed text-center">
            <thead>
              <tr>
                <th scope="col" className="w-[140px] py-1 pb-3 pl-7">
                  <div className="flex items-center gap-1 whitespace-nowrap">
                    <CompleteIcon />
                    <h4 className="text-sm font-medium"> Order </h4>
                  </div>
                </th>
                <th scope="col" className="w-[100px] py-1 pb-3">
                  <div className="flex items-center gap-1 whitespace-nowrap">
                    <FaTimeline className="flex-shrink-0 text-neutral-400" />
                    <h4 className="text-sm font-medium"> Date </h4>
                  </div>
                </th>
                <th scope="col" className="w-[80px] py-1 pb-3">
                  <div className="flex items-center gap-1 whitespace-nowrap">
                    <FaSquareCheck className="flex-shrink-0 text-neutral-400" />
                    <h4 className="text-sm font-medium"> Status </h4>
                  </div>
                </th>
                <th scope="col" className="w-[100px] py-1 pb-3 pr-7">
                  <div className="flex items-center gap-1 whitespace-nowrap">
                    <BsBagFill className="flex-shrink-0 text-neutral-400" />
                    <h4 className="text-sm font-medium"> Company </h4>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {usersData.map((user, index) => (
                <tr
                  key={user.id}
                  className={`w-full rounded-b-xl ${index % 2 === 0 ? "bg-neutral-700" : "bg-neutral-600"}`}
                >
                  <td className="py-1 pl-7">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center justify-center">
                        <label className="relative z-0 flex cursor-pointer items-center">
                          <input
                            type="checkbox"
                            className="peer size-[14px] cursor-pointer appearance-none rounded-sm border border-darkGray shadow transition-all checked:border-primary-1 checked:bg-primary-1 hover:shadow-md"
                            id={`check${user.id}`}
                          />
                          <span className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 transform text-white opacity-0 peer-checked:opacity-100">
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
                      <p className="text-left text-xs font-medium text-neutral-400">
                        {user.name}
                      </p>
                    </div>
                  </td>
                  <td className="py-1">
                    <p className="text-left text-xs font-medium text-neutral-400">
                      {user.country}
                    </p>
                  </td>
                  <td className="py-1">
                    <button
                      className={`border-${user.online ? "success-light" : "neutral-400"} bg-${user.online ? "success-light" : "neutral-600"} flex h-5 items-center justify-center rounded-sm border px-1.5 text-[10px] text-sm font-medium text-success`}
                    >
                      <span> . </span>
                      {user.online ? "online" : "offline"}
                    </button>
                  </td>
                  <td className="py-1">
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default RecentOrder;
