"use client";
import React from "react";
import { GoArrowDown } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import ViewIcon from "../Icons/ViewIcon";
import ArrowIcon from "../Icons/ArrowIcon";
import UserIcon from "../Icons/UserIcon";
import SignupIcon from "../Icons/SignupIcon";
import ArrowExternal from "../Icons/ArrowExternal";

import dynamic from "next/dynamic";

const WorldMap = dynamic(() => import("../WorldMap/WorldMap"), {
  ssr: false,
});
const ProfitChart = dynamic(() => import("../Charts/ProfitChart/ProfitChart"), {
  ssr: false,
});
const SessionsChart = dynamic(
  () => import("../Charts/SessionsChart/SessionsChart"),
  { ssr: false },
);
const DeviceUsersChart = dynamic(
  () => import("../Charts/DeviceUsersChart/DeviceUsersChart"),
  { ssr: false },
);
const RevenueExpensesChart = dynamic(
  () => import("../Charts/RevenueExpensesChart/RevenueExpensesChart"),
  { ssr: false },
);
const RecentOrder = dynamic(() => import("../RecentOrder/RecentOrder"), {
  ssr: false,
});

const HomePage = () => {
  return (
    <>
      <div className="-z-20 mb-28 px-4 lg:px-11">
        <div className="flex flex-col justify-between gap-y-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-xl font-semibold md:text-2xl">
              Welcome back, John
            </h2>
            <p className="mt-1 text-xs font-normal italic text-neutral-400">
              Measure your advertising ROI and report website traffic.
            </p>
          </div>
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

        <div className="mt-8 flex w-full items-center gap-4 overflow-x-auto">
          <div className="w-full rounded-lg border border-darkGray bg-neutral-600 p-3 md:p-5">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-1">
                <ViewIcon />
                <p className="overflow-hidden whitespace-nowrap text-xs font-medium leading-[14px] text-neutral-400">
                  Pageviews
                </p>
              </div>
              <div className="cursor-pointer">
                <BsThreeDots />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1.5">
              <h2 className="text-xl font-semibold md:text-2xl">50.8K</h2>
              <p className="flex h-[18px] items-center justify-center rounded-sm border border-success-light bg-success-light px-1 py-0.5 text-[10px] font-medium text-success">
                28.4%
                <ArrowIcon />
              </p>
            </div>
          </div>
          <div className="w-full rounded-lg border border-darkGray bg-neutral-600 p-3 md:p-5">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-1">
                <UserIcon />
                <p className="overflow-hidden whitespace-nowrap text-xs font-medium leading-[14px] text-neutral-400">
                  Monthly users
                </p>
              </div>
              <div className="cursor-pointer">
                <BsThreeDots />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1.5">
              <h2 className="text-xl font-semibold md:text-2xl">23.6K</h2>
              <p className="flex h-[18px] items-center justify-center rounded-sm border border-alert-light bg-alert-light px-1 py-0.5 text-[10px] font-medium text-alert">
                28.4%
                <ArrowExternal />
              </p>
            </div>
          </div>
          <div className="w-full rounded-lg border border-darkGray bg-neutral-600 p-3 md:p-5">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-1">
                <SignupIcon />
                <p className="overflow-hidden whitespace-nowrap text-xs font-medium leading-[14px] text-neutral-400">
                  New sign ups
                </p>
              </div>
              <div className="cursor-pointer">
                <BsThreeDots />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1.5">
              <h2 className="text-xl font-semibold md:text-2xl">50.8K</h2>
              <p className="flex h-[18px] items-center justify-center rounded-sm border border-success-light bg-success-light px-1 py-0.5 text-[10px] font-medium text-success">
                28.4%
                <ArrowIcon />
              </p>
            </div>
          </div>
          <div className="w-full rounded-lg border border-darkGray bg-neutral-600 p-3 md:p-5">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-1">
                <ViewIcon />
                <p className="overflow-hidden whitespace-nowrap text-xs font-medium leading-[14px] text-neutral-400">
                  Subscriptions
                </p>
              </div>
              <div className="cursor-pointer">
                <BsThreeDots />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1.5">
              <h2 className="text-xl font-semibold md:text-2xl">50.8K</h2>
              <p className="flex h-[18px] items-center justify-center rounded-sm border border-success-light bg-success-light px-1 py-0.5 text-[10px] font-medium text-success">
                28.4%
                <ArrowIcon />
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[17px] grid grid-cols-1 rounded-xl border border-darkGray md:grid-cols-[64.6%_35.4%]">
          <div className="h-full">
            <RevenueExpensesChart />
          </div>
          <div className="h-full rounded-xl bg-neutral-600">
            <ProfitChart />
            <SessionsChart />
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-y-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-xl font-semibold md:text-2xl">
              Reports overview
            </h2>
            <div>Select date</div>
          </div>
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

        <div className="mt-6 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <DeviceUsersChart />
          </div>
          <div>
            <RecentOrder />
          </div>
        </div>
        <WorldMap />
      </div>
    </>
  );
};

export default HomePage;
