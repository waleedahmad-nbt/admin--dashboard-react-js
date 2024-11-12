import React from "react";
import ArrowIcon from "../Icons/ArrowIcon";
import { BsThreeDots } from "react-icons/bs";
import PriceIcon from "../Icons/PriceIcon";
import SaleIcon from "@/public/images/SaleIcon";
import ArrowExternal from "../Icons/ArrowExternal";
import BagIcon from "../Icons/BagIcon";
import HeartIcon from "../Icons/HeartIcon";

const AnalyticsHeader = () => {
  return (
    <>
      <div className="mt-8 flex w-full items-center gap-4 overflow-x-auto">
        <div className="w-full rounded-lg border border-darkGray bg-neutral-600 p-3 md:p-5">
          <div className="flex w-full items-center justify-between gap-1 whitespace-nowrap">
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
            <h2 className="text-xl font-semibold md:text-2xl">50.8K</h2>
            <p className="flex h-[18px] items-center justify-center rounded-sm border border-success-light bg-success-light px-1 py-0.5 text-[10px] font-medium text-success">
              28.4%
              <ArrowIcon />
            </p>
          </div>
        </div>
        <div className="w-full rounded-lg border border-darkGray bg-neutral-600 p-3 md:p-5">
          <div className="flex w-full items-center justify-between gap-1 whitespace-nowrap">
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
            <h2 className="text-xl font-semibold md:text-2xl">23.6K</h2>
            <p className="flex h-[18px] items-center justify-center rounded-sm border border-alert-light bg-alert-light px-1 py-0.5 text-[10px] font-medium text-alert">
              28.4%
              <ArrowExternal />
            </p>
          </div>
        </div>
        <div className="w-full rounded-lg border border-darkGray bg-neutral-600 p-3 md:p-5">
          <div className="flex w-full items-center justify-between gap-1 whitespace-nowrap">
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
            <h2 className="text-xl font-semibold md:text-2xl">50.8K</h2>
            <p className="flex h-[18px] items-center justify-center rounded-sm border border-success-light bg-success-light px-1 py-0.5 text-[10px] font-medium text-success">
              28.4%
              <ArrowIcon />
            </p>
          </div>
        </div>
        <div className="w-full rounded-lg border border-darkGray bg-neutral-600 p-3 md:p-5">
          <div className="flex w-full items-center justify-between gap-1 whitespace-nowrap">
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
            <h2 className="text-xl font-semibold md:text-2xl">50.8K</h2>
            <p className="flex h-[18px] items-center justify-center rounded-sm border border-success-light bg-success-light px-1 py-0.5 text-[10px] font-medium text-success">
              28.4%
              <ArrowIcon />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalyticsHeader;
