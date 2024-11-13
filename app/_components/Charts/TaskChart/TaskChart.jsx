"use client";
import React from "react";
import dynamic from "next/dynamic";
import "tailwindcss/tailwind.css";
import { GoClockFill } from "react-icons/go";
import ArrowIcon from "../../Icons/ArrowIcon";
import CalenderIcon from "../../Icons/CalenderIcon";
import { MdKeyboardArrowDown } from "react-icons/md";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const TaskChart = () => {
  const data = {
    options: {
      chart: {
        type: "line",
        toolbar: { show: false },
        foreColor: "#A1ABBD",
      },
      grid: { show: false },
      stroke: {
        curve: "straight",
        width: 2,
        colors: ["#00C2FF"],
      },
      xaxis: {
        categories: ["Jan 1", "Jan 8", "Jan 16", "Jan 24", "Jan 31", "Feb 1"],
        labels: { style: { colors: "#A1ABBD" } },
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      yaxis: {
        min: 0,
        max: 500,
        tickAmount: 5,
        labels: { style: { colors: "#A1ABBD" } },
      },
      tooltip: {
        theme: "dark",
      },
    },
    series: [
      {
        name: "Tasks Completed",
        data: [50, 150, 250, 400, 300, 200],
      },
    ],
  };

  return (
    <>
      <div className="mx-auto w-full rounded-lg bg-neutral-600 p-4 lg:p-6">
        <div className="flex items-center justify-between">
          <h2 className="inline-flex items-center gap-2 text-xs font-medium text-neutral-400">
            <span>
              <GoClockFill />
            </span>
            Completed tasks over time
          </h2>
          <div className="Shadowmonth flex cursor-pointer items-center justify-center gap-3 rounded bg-neutral-700 p-[9px] text-neutral-400">
            <div className="flex items-center gap-1">
              <CalenderIcon />
              <p className="text-[10px] font-medium">Jan 2024 </p>
            </div>
            <MdKeyboardArrowDown />
          </div>
        </div>
        <div className="mb-2 flex items-center space-x-2">
          <h1 className="text-2xl font-semibold text-white md:text-4xl">257</h1>
          <p className="flex h-[18px] items-center justify-center rounded-sm border border-success-light bg-success-light px-1 py-0.5 text-[10px] font-medium text-success">
            28.4%
            <ArrowIcon />
          </p>
        </div>
        <Chart
          options={data.options}
          series={data.series}
          type="line"
          height={200} // Adjusted height to more closely resemble the image
        />
      </div>
    </>
  );
};

export default TaskChart;
