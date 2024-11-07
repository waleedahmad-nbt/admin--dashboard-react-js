"use client";
import React from "react";
import ArrowIcon from "../Icons/ArrowIcon";
import { BsThreeDots } from "react-icons/bs";
import ArrowExternal from "../Icons/ArrowExternal";
import HeartIcon from "../Icons/HeartIcon";
import BagIcon from "../Icons/BagIcon";
import SaleIcon from "@/public/images/SaleIcon";
import PriceIcon from "../Icons/PriceIcon";
import Image from "next/image";

import dynamic from "next/dynamic";

// Dynamically import your chart components without SSR
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

const Analytics = () => {
  return (
    <>
      <div className="mb-28 px-11">
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

        <div className="mt-8 flex items-center gap-4">
          <div className="w-full rounded-lg border border-darkGray bg-neutral-600 p-5">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-1">
                <HeartIcon />
                <p className="text-xs font-medium leading-[14px] text-neutral-400">
                  Save Products
                </p>
              </div>
              <div className="cursor-pointer">
                <BsThreeDots />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1.5">
              <h2 className="text-2xl font-semibold">50.8K</h2>
              <p className="flex h-[18px] items-center justify-center rounded-sm border border-success-light bg-success-light px-1 py-0.5 text-[10px] font-medium text-success">
                28.4%
                <ArrowIcon />
              </p>
            </div>
          </div>
          <div className="w-full rounded-lg border border-darkGray bg-neutral-600 p-5">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-1">
                <BagIcon />
                <p className="text-xs font-medium leading-[14px] text-neutral-400">
                  Stock Products
                </p>
              </div>
              <div className="cursor-pointer">
                <BsThreeDots />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1.5">
              <h2 className="text-2xl font-semibold">23.6K</h2>
              <p className="flex h-[18px] items-center justify-center rounded-sm border border-alert-light bg-alert-light px-1 py-0.5 text-[10px] font-medium text-alert">
                28.4%
                <ArrowExternal />
              </p>
            </div>
          </div>
          <div className="w-full rounded-lg border border-darkGray bg-neutral-600 p-5">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-1">
                <SaleIcon />
                <p className="text-xs font-medium leading-[14px] text-neutral-400">
                  Sale Products
                </p>
              </div>
              <div className="cursor-pointer">
                <BsThreeDots />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1.5">
              <h2 className="text-2xl font-semibold">50.8K</h2>
              <p className="flex h-[18px] items-center justify-center rounded-sm border border-success-light bg-success-light px-1 py-0.5 text-[10px] font-medium text-success">
                28.4%
                <ArrowIcon />
              </p>
            </div>
          </div>
          <div className="w-full rounded-lg border border-darkGray bg-neutral-600 p-5">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-1">
                <PriceIcon />
                <p className="text-xs font-medium leading-[14px] text-neutral-400">
                  Average Revenue
                </p>
              </div>
              <div className="cursor-pointer">
                <BsThreeDots />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1.5">
              <h2 className="text-2xl font-semibold">50.8K</h2>
              <p className="flex h-[18px] items-center justify-center rounded-sm border border-success-light bg-success-light px-1 py-0.5 text-[10px] font-medium text-success">
                28.4%
                <ArrowIcon />
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[30px] flex items-center gap-5">
          <div className="w-[30%]">
            <HalfDonutChart />
          </div>
          <div className="w-[70%]">
            <RevenueChart />
          </div>
        </div>
        <div className="mt-[30px] grid grid-cols-3 gap-[30px]">
          <div className="h-full w-full rounded-xl bg-neutral-600 p-[30px] text-white shadow-md">
            <h2 className="mb-7 text-start text-base font-medium">Products</h2>
            <div className="mt-[30px] flex items-center justify-between">
              <h4 className="text-xs font-medium">Products</h4>
              <p className="text-xs font-medium">Price</p>
            </div>
            <div className="mt-[30px] flex flex-col gap-y-5">
              <div className="mt-5 flex items-center justify-between">
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
              <div className="mt-5 flex items-center justify-between">
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
          <div className="h-full w-full rounded-xl bg-neutral-600 p-[30px] text-white shadow-md">
            <h2 className="mb-7 text-start text-base font-medium">
              Team progress
            </h2>
            <div className="mt-[30px] flex flex-col gap-y-5">
              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-8">
                    <Image
                      width={32}
                      height={32}
                      unoptimized
                      src="/images/Group 1000004743.png"
                      alt="rofike"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">John Carter</h4>
                    <p className="text-xs font-medium text-neutral-400">
                      contact@sophiemoore.com
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium">60%</p>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-8">
                    <Image
                      width={32}
                      height={32}
                      unoptimized
                      src="/images/Group 1000004743.png"
                      alt="rofike"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">John Carter</h4>
                    <p className="text-xs font-medium text-neutral-400">
                      contact@sophiemoore.com
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium">60%</p>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-8">
                    <Image
                      width={32}
                      height={32}
                      unoptimized
                      src="/images/Group 1000004743.png"
                      alt="rofike"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">John Carter</h4>
                    <p className="text-xs font-medium text-neutral-400">
                      contact@sophiemoore.com
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium">60%</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <WebsiteVisitors />
          </div>
        </div>
        <div className="mt-[30px]">
          <OrderStatus />
        </div>
      </div>
    </>
  );
};

export default Analytics;
