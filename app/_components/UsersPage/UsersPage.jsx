import React from "react";
import SearchInput from "../SearchInput/SearchInput";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import AllUserTable from "../AllUsersTable/AllUserTable";
import Link from "next/link";

const UsersPage = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex w-full items-center gap-12">
          <h2 className="text-xl font-semibold">Users</h2>
          <SearchInput width="352px" height="42px" />
        </div>
        <Link
          href="/add-users"
          className="flex h-[30px] items-center justify-center whitespace-nowrap rounded bg-primary-1 px-4 text-xs font-medium text-white"
        >
          Add user
        </Link>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <div className="w-full rounded-lg border border-darkGray bg-neutral-600 p-5">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                width={40}
                height={40}
                src="/images/Group 34.png"
                alt="user"
              />
              <div>
                <h3 className="text-base font-medium leading-5">Total Users</h3>
                <p className="text-xs font-normal leading-[18px] text-neutral-400">
                  250
                </p>
              </div>
            </div>
            <div className="cursor-pointer">
              <BsThreeDotsVertical />
            </div>
          </div>
        </div>
        <div className="w-full rounded-lg border border-darkGray bg-neutral-600 p-5">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-1">
              <Image
                width={40}
                height={40}
                src="/images/Frame 1000005746.svg"
                alt="user"
              />
              <div>
                <h3 className="text-base font-medium leading-5">New Users</h3>
                <p className="text-xs font-normal leading-[18px] text-neutral-400">
                  250
                </p>
              </div>
            </div>
            <div className="cursor-pointer">
              <BsThreeDotsVertical />
            </div>
          </div>
        </div>
        <div className="w-full rounded-lg border border-darkGray bg-neutral-600 p-5">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-1">
              <Image
                width={40}
                height={40}
                src="/images/Group 38685.svg"
                alt="user"
              />
              <div>
                <h3 className="text-base font-medium leading-5">Top Users</h3>
                <p className="text-xs font-normal leading-[18px] text-neutral-400">
                  250
                </p>
              </div>
            </div>
            <div className="cursor-pointer">
              <BsThreeDotsVertical />
            </div>
          </div>
        </div>
        <div className="w-full rounded-lg border border-darkGray bg-neutral-600 p-5">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-1">
              <Image width={40} height={40} src="/images/msg.svg" alt="user" />
              <div>
                <h3 className="text-base font-medium leading-5">Top Users</h3>
                <p className="text-xs font-normal leading-[18px] text-neutral-400">
                  250
                </p>
              </div>
            </div>
            <div className="cursor-pointer">
              <BsThreeDotsVertical />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-20 w-full overflow-hidden">
        <AllUserTable />
      </div>
    </>
  );
};

export default UsersPage;
