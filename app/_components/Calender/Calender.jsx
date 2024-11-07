"use client";
import { useState } from "react";
import CalenderComponent from "./CalenderComponent";
import SimpleSelect from "next-simple-select";
import { FaPlus } from "react-icons/fa6";
import SearchIcon from "../Icons/SearchIcon";
import Image from "next/image";
import SidebarCalender from "./SidebarCalender";

const Calendar = () => {
  const options = [
    { value: "Monthly", label: "Monthly" },
    { value: "Yearly", label: "Yearly" },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <>
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Calendar</h1>

        <SimpleSelect
          value={selectedOption}
          onChange={setSelectedOption}
          options={options}
          className="custom-select h-[42px] w-[159px] bg-[#7F25FB] text-white"
        />
      </header>
      <div className="mt-9 flex gap-7">
        <div className="h-full flex-shrink-0">
          <Sidebar />
        </div>
        <div className="w-full">
          <CalenderComponent />
        </div>
      </div>
    </>
  );
};

export const Sidebar = () => (
  <>
    <aside className="relative min-h-[1260px] w-[266px] rounded-md bg-neutral-600 p-6 text-white">
      <div className="flex h-full flex-col">
        {/* Top Section */}
        <div className="flex-grow">
          <button className="BtnGradient mb-4 flex w-full items-center justify-center gap-2.5 rounded-[10px] px-10 py-3 text-sm">
            <span>
              <FaPlus />
            </span>
            Create Schedule
          </button>
          <div className="mt-[26px]">
            <SidebarCalender />
          </div>
          <h3 className="mb-5 mt-[30px] text-base font-medium">People</h3>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="h-[42px] w-full rounded-lg bg-neutral-700 px-3 py-2 text-sm font-normal text-white outline-none placeholder:text-white"
            />
            <div className="absolute right-5 top-1/2 -translate-y-1/2">
              <SearchIcon />
            </div>
          </div>

          <ul className="mt-[22px] space-y-5">
            <li className="flex cursor-pointer items-center gap-4">
              <div className="size-[34px] rounded-full bg-[#6d396a]">
                <Image
                  width={34}
                  height={34}
                  unoptimized
                  src="/images/Ellipse 96.png"
                  alt="user"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-sm font-medium">Eddie Lobanovskiy</h4>
                <p className="text-xs font-normal text-neutral-400">
                  laboanovskiy@gmail.com
                </p>
              </div>
            </li>
            <li className="flex cursor-pointer items-center gap-4">
              <div className="size-[34px] rounded-full bg-[#2e2f89]">
                <Image
                  width={34}
                  height={34}
                  unoptimized
                  src="/images/Ellipse 96 (1).png"
                  alt="user"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-sm font-medium">Eddie Lobanovskiy</h4>
                <p className="text-xs font-normal text-neutral-400">
                  laboanovskiy@gmail.com
                </p>
              </div>
            </li>
            <li className="flex cursor-pointer items-center gap-4">
              <div className="size-[34px] rounded-full bg-[#6d396a]">
                <Image
                  width={34}
                  height={34}
                  unoptimized
                  src="/images/Ellipse 96.png"
                  alt="user"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-sm font-medium">Eddie Lobanovskiy</h4>
                <p className="text-xs font-normal text-neutral-400">
                  laboanovskiy@gmail.com
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-[30px] mx-auto min-w-[220px]">
          <button className="schBtn mx-auto w-full rounded-[10px] border-2 border-transparent bg-neutral-600 py-2 text-sm font-medium">
            <span className="bg-gradient-to-r from-[#cb3cff] to-[#7f25fb] bg-clip-text text-transparent">
              My Schedule
            </span>
          </button>
        </div>
      </div>
    </aside>
  </>
);

export default Calendar;
