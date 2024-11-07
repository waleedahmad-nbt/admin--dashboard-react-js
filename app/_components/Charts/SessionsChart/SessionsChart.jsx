"use client";
import React from "react";
import ReactApexChart from "react-apexcharts";
import ArrowIcon from "../../Icons/ArrowIcon";

const SessionsChart = () => {
  const options = {
    chart: {
      type: "line",
      toolbar: { show: false },
    },
    colors: ["#A259FF"], // Set the color to match the reference
    stroke: {
      curve: "straight",
      width: 2,
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["12 AM", "8 AM", "4 PM", "11 PM"], // Show key time points only
      labels: {
        style: { colors: "#ffffff" },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      show: true,
      labels: {
        style: { colors: "#ffffff" },
      },
    },
    grid: {
      show: false,
    },
    tooltip: {
      enabled: true,
      theme: "dark",
    },
    markers: {
      size: 0,
    },
    legend: {
      show: false,
    },
  };

  const series = [
    {
      name: "Sessions",
      data: [0, 50, 100, 70, 120, 70, 250, 100, 300], // Example data
    },
  ];

  return (
    <div className="mt-5 rounded-b-lg border-t border-darkGray bg-neutral-600 p-4 pt-5 text-white">
      <div className="mb-4 flex flex-col justify-between">
        <div>
          <p className="text-sm font-medium text-neutral-400">Total sessions</p>
          <div className="flex items-center gap-1.5">
            <h2 className="text-2xl font-semibold">$144.6K</h2>
            <p className="border-success-light bg-success-light text-success flex h-[18px] items-center justify-center rounded-sm border px-1 py-0.5 text-[10px] font-medium">
              28.5%
              <ArrowIcon />
            </p>
          </div>
        </div>
        <div className="mt-4 h-full">
          <ReactApexChart
            options={options}
            series={series}
            type="line"
            height={180}
          />
        </div>
      </div>
      <div className="mt-4 flex justify-between text-sm text-gray-400">
        <p className="flex items-center gap-1">
          <span className="rounded-full bg-green-500 px-2 py-1 text-white">
            ●
          </span>
          Live 10k visitors
        </p>
        <a href="#" className="text-purple-500">
          View report
        </a>
      </div>
    </div>
  );
};

export default SessionsChart;
