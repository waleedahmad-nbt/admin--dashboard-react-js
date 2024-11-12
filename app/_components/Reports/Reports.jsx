"use client";
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import AnalyticsHeader from "../AnalyticsHeader/AnalyticsHeader";
import TaskChart from "../Charts/TaskChart/TaskChart";

const HalfDonutChart = dynamic(
  () => import("../Charts/DeviceUsersChart/DonutChart"),
  { ssr: false },
);
const RevenueChart = dynamic(
  () => import("../Charts/RevenueChart/RevenueChart"),
  { ssr: false },
);
const WebsiteVisitors = dynamic(
  () => import("../Charts/WebsiteVisitors/WebsiteVisitors"),
  { ssr: false },
);
const OrderStatus = dynamic(() => import("../OrderStatus/OrderStatus"), {
  ssr: false,
});

const Reports = () => {
  return (
    <>
      <div className="lgpx-11 mb-28 px-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Analytics</h2>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex h-[30px] w-full items-center justify-center gap-1 whitespace-pre rounded bg-primary-1 p-2 text-xs font-medium leading-[14px]">
              May 2023
            </button>
          </div>
        </div>

        <AnalyticsHeader />
        <div className="mt-[30px] flex flex-col items-center gap-5 lg:flex-row">
          <div className="w-full lg:w-[30%]">
            <HalfDonutChart />
          </div>
          <div className="w-full lg:w-[70%]">
            <RevenueChart />
          </div>
        </div>
        <div className="mt-[30px] flex w-full flex-col items-center gap-[30px] md:flex-row">
          <div className="min-h-[353px] w-full rounded-xl bg-neutral-600 p-4 text-white shadow-md md:max-w-[341px] lg:p-[30px]">
            <h2 className="mb-7 text-start text-base font-medium">Products</h2>
            <div className="mt-[30px] flex items-center justify-between">
              <h4 className="text-xs font-medium">Products</h4>
              <p className="text-xs font-medium">Price</p>
            </div>
            <div className="mt-[30px] flex flex-col gap-y-5">
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-8">
                    <Image
                      width={40}
                      height={40}
                      unoptimized
                      src="/images/Mask Group.svg"
                      alt="rofike"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">iPhone 14 Pro Max</h4>
                    <p className="text-xs font-medium text-neutral-400">
                      524 in stock
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium">$ 1,099.00</p>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-8">
                    <Image
                      width={32}
                      height={32}
                      unoptimized
                      src="/images/Mask Group (1).svg"
                      alt="rofike"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Apple Watch S8</h4>
                    <p className="text-xs font-medium text-neutral-400">
                      320 in stock
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium">$ 799.00</p>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-8">
                    <Image
                      width={32}
                      height={32}
                      unoptimized
                      src="/images/Mask Group (1).svg"
                      alt="rofike"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Apple Watch S8</h4>
                    <p className="text-xs font-medium text-neutral-400">
                      320 in stock
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium">$ 799.00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <TaskChart />
          </div>
        </div>
        <div className="mt-[30px]">
          <OrderStatus />
        </div>
      </div>
    </>
  );
};

export default Reports;
