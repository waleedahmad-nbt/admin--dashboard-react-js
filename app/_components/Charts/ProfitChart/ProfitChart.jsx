"use client";
import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import ArrowIcon from "../../Icons/ArrowIcon";
import ChartIcon from "../../Icons/ChartIcon";

const ProfitChart = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    // Trigger the animation after a slight delay
    const timer = setTimeout(() => {
      setSeries([
        {
          name: "Profit A",
          data: [30, 40, 35, 50, 49, 60, 70, 75, 54, 46, 56, 78, 65],
        },
        {
          name: "Profit B",
          data: [26, 36, 20, 60, 50, 49, 40, 40, 50, 39, 50, 49, 90],
        },
      ]);
    }, 100); // Adjust delay as needed

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  const options = {
    chart: {
      type: "bar",
      toolbar: { show: false },
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
    colors: ["#A259FF", "#00C1D4"],
    plotOptions: {
      bar: {
        columnWidth: "50%", // Adjust for desired bar width
        borderRadius: 2,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "12 AM",
        "",
        "",
        "",
        "8 AM",
        "",
        "",
        "",
        "4 PM",
        "",
        "",
        "",
        "11 PM",
      ],
      labels: {
        style: { colors: "#ffffff" },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false,
    },
    legend: {
      show: false,
    },
  };

  return (
    <div className="rounded-t-lg bg-neutral-600 px-4 py-5 pb-5 text-white">
      <div className="mb-4 flex flex-col">
        <div>
          <p className="flex items-center gap-1 text-sm font-medium text-neutral-400">
            <ChartIcon />
            Total profit
          </p>
          <div className="flex items-center gap-1.5">
            <h2 className="text-2xl font-semibold">$144.6K</h2>
            <p className="border-success-light bg-success-light text-success flex h-[18px] items-center justify-center rounded-sm border px-1 py-0.5 text-[10px] font-medium">
              28.5%
              <ArrowIcon />
            </p>
          </div>
        </div>
        <div className="h-[100px]">
          <ReactApexChart options={options} series={series} type="bar" />
        </div>
      </div>
      <div className="mt-20 flex justify-between text-sm">
        <p className="text-xs font-normal text-neutral-400">Last 12 months</p>
        <p className="cursor-pointer text-start font-normal text-primary-1">
          View report
        </p>
      </div>
    </div>
  );
};

export default ProfitChart;
