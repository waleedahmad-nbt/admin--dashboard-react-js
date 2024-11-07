import React from "react";
import SearchInput from "../SearchInput/SearchInput";
import { HiMiniPencil } from "react-icons/hi2";

const AddNewUser = () => {
  return (
    <>
      <div className="flex w-full items-center gap-12">
        <h2 className="text-xl font-semibold">Add User</h2>
        <SearchInput width="352px" height="42px" />
      </div>
      <div className="mt-24 flex">
        <div className="border-r border-darkGray">
          <div className="mr-[52px] w-[250px]">
            <h3 className="text-base font-medium">Credentials</h3>
            <ul className="mt-6 space-y-2">
              <li className="flex h-[42px] cursor-pointer items-center gap-2 rounded-lg bg-neutral-700 px-3">
                <HiMiniPencil />
                <p className="text-sm font-medium">Personal Information</p>
              </li>
              <li className="flex h-[42px] cursor-pointer items-center gap-2 rounded-lg bg-neutral-700 px-3 text-neutral-400">
                <HiMiniPencil />
                <p className="text-sm font-medium">Team</p>
              </li>
              <li className="flex h-[42px] cursor-pointer items-center gap-2 rounded-lg bg-neutral-700 px-3 text-neutral-400">
                <HiMiniPencil />
                <p className="text-sm font-medium">Billing</p>
              </li>
              <li className="flex h-[42px] cursor-pointer items-center gap-2 rounded-lg bg-neutral-700 px-3 text-neutral-400">
                <HiMiniPencil />
                <p className="text-sm font-medium">Notifications</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewUser;
