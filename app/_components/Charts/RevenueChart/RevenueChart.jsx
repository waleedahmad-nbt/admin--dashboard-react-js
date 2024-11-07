"use client";
import React from "react";
import Chart from "react-apexcharts";
import { MdKeyboardArrowDown } from "react-icons/md";
import CalenderIcon from "../../Icons/CalenderIcon";
import ArrowIcon from "../../Icons/ArrowIcon";

const RevenueChart = () => {
  const options = {
    chart: {
      type: "bar",
      stacked: true,
      toolbar: { show: false },
      background: "#0B1739", // Dark background similar to the image
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800, // Duration of the animation in milliseconds
        animateGradually: {
          enabled: true,
          delay: 150, // Delay between each bar animation
        },
        dynamicAnimation: {
          enabled: true,
          speed: 500, // Speed for re-rendering animation
        },
      },
    },
    theme: {
      mode: "dark",
    },
    colors: ["#CB3CFF", "#0E43FB", "#00C2FF"], // Colors matching Current clients, Subscribers, New customers
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "20%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      title: {
        style: { color: "#fff" },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
    tooltip: {
      y: {
        formatter: (val) => `$${val}K`,
      },
    },
  };

  const series = [
    {
      name: "Current clients",
      data: [40, 55, 75, 60, 50, 30, 20, 80, 45, 55, 35, 60],
    },
    {
      name: "Subscribers",
      data: [30, 35, 45, 50, 40, 30, 20, 50, 40, 45, 30, 50],
    },
    {
      name: "New customers",
      data: [20, 25, 35, 30, 20, 15, 10, 35, 25, 20, 20, 25],
    },
  ];

  return (
    <>
      <div className="h-[460px] rounded-lg bg-neutral-600 p-4 text-white">
        <div className="mb-4 flex items-center">
          <div>
            <p className="whitespace-nowrap text-sm font-medium text-neutral-400">
              Revenue by customer type
            </p>
            <div className="mt-2 flex items-center gap-1.5">
              <h2 className="text-2xl font-semibold">$240.8K</h2>
              <p className="flex h-[18px] items-center justify-center rounded-sm border border-success-light bg-success-light px-1 py-0.5 text-[10px] font-medium text-success">
                28.4%
                <ArrowIcon />
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 whitespace-nowrap">
            <p className="flex cursor-pointer items-center space-x-1">
              <span className="h-2 w-2 rounded-full bg-primary-1"></span>
              <span className="text-xs font-medium text-neutral-400">
                Current clients
              </span>
            </p>
            <p className="flex cursor-pointer items-center space-x-1">
              <span className="h-2 w-2 rounded-full bg-cyanBlue"></span>
              <span className="text-xs font-medium text-neutral-400">
                Subscribers
              </span>
            </p>
            <p className="flex cursor-pointer items-center space-x-1">
              <span className="h-2 w-2 rounded-full bg-cyanBlue"></span>
              <span className="text-xs font-medium text-neutral-400">
                New Customers
              </span>
            </p>
            <div className="Shadowmonth flex items-center justify-center gap-3 rounded bg-neutral-700 p-[9px] text-neutral-400">
              <div className="flex items-center gap-1">
                <CalenderIcon />
                <p className="text-[10px] font-medium">Jan 2024 - Dec 2024</p>
              </div>
              <MdKeyboardArrowDown />
            </div>
          </div>
        </div>
        <Chart options={options} series={series} type="bar" height={320} />
      </div>
    </>
  );
};

export default RevenueChart;
