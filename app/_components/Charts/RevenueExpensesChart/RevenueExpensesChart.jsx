"use client";
import React, { useState } from "react";
import Chart from "react-apexcharts";
import { MdKeyboardArrowDown } from "react-icons/md";
import ArrowIcon from "../../Icons/ArrowIcon";
import CalenderIcon from "../../Icons/CalenderIcon";

const RevenueExpensesChart = () => {
  const [activeSeries, setActiveSeries] = useState({
    Revenue: true,
    Expenses: true,
  });

  const toggleSeries = (seriesName) => {
    setActiveSeries((prev) => ({
      ...prev,
      [seriesName]: !prev[seriesName],
    }));
  };

  const options = {
    chart: {
      type: "line",
      toolbar: { show: false },
      animations: {
        enabled: true,
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
    },
    colors: ["#A259FF", "#00C1D4"], // Line colors
    stroke: {
      width: 3,
      curve: "smooth",
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        const value = series[seriesIndex][dataPointIndex];
        const date = w.globals.labels[dataPointIndex];
        const percentageChange = 12.5;

        return `
          <div style="
              background-color: #0B1739; 
              width: 145px;
              height: 63px;
              padding: 10px 16px; 
              color: #ffffff; 
              border-radius: 8px;
          ">
            <div style="
              display: flex; 
              align-items: center;
              gap: 2px;
              font-family: Arial, sans-serif;
              font-size: 14px;
              box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
            ">
              <div style="font-size: 16px; font-weight: 500;">$${value.toFixed(1)}k</div>
              <div style="display: flex; align-items: center;">
                <div style="
                  background-color: #05C16833; 
                  color: #14CA74; 
                  padding: 3px 6px; 
                  height: 18px;
                  border-radius: 4px; 
                  font-size: 12px;
                  display: flex; 
                  align-items: center;
                ">
                  ${percentageChange}% <span style="margin-left: 3px;">↑</span>
                </div>
              </div>
            </div>
            <div style="font-size: 12px; color: #A0AEC0; margin-top: 5px;">${date}</div>
          </div>
        `;
      },
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
      labels: {
        style: {
          colors: "#ffffff",
        },
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => `${value}K`,
        style: {
          colors: "#A0AEC0",
          fontSize: "12px",
          fontFamily: "Arial, sans-serif",
        },
        offsetX: -10,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
  };

  const series = [
    {
      name: "Revenue",
      data: activeSeries.Revenue
        ? [0, 100, 150, 200, 175, 210, 250, 225, 200, 220, 240, 250]
        : [],
      fill: {
        type: "gradient",
        gradient: {
          type: "vertical",
          opacityFrom: 0.3,
          opacityTo: 0,
          stops: [0, 100],
          colors: ["#A259FF", "#A259FF"], // Same color as the line for the background
        },
      },
    },
    {
      name: "Expenses",
      data: activeSeries.Expenses
        ? [25, 40, 75, 100, 95, 105, 130, 115, 100, 140, 160, 180]
        : [],
      fill: {
        type: "gradient",
        gradient: {
          type: "vertical",
          opacityFrom: 0.3,
          opacityTo: 0,
          stops: [0, 100],
          colors: ["#00C1D4", "#00C1D4"],
        },
      },
    },
  ];

  return (
    <>
      <div className="charts z-[100] h-full border-r border-darkGray bg-neutral-600 p-4 text-white max-md:rounded-t-xl md:rounded-l-xl lg:p-6">
        <div className="mb-4 flex flex-col justify-between lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-medium text-neutral-400">
              Total revenue
            </p>
            <div className="mt-2 flex items-center gap-1.5">
              <h2 className="text-2xl font-semibold">$240.8K</h2>
              <p className="flex h-[18px] items-center justify-center rounded-sm border border-success-light bg-success-light px-1 py-0.5 text-[10px] font-medium text-success">
                28.4%
                <ArrowIcon />
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-6 gap-y-3 whitespace-nowrap max-md:mt-2">
            <span
              className={`flex cursor-pointer items-center space-x-1 ${
                activeSeries.Revenue ? "" : "opacity-50"
              }`}
              onClick={() => toggleSeries("Revenue")}
            >
              <span className="h-2 w-2 rounded-full bg-primary-1"></span>
              <span className="text-xs font-medium text-neutral-400">
                Revenue
              </span>
            </span>
            <span
              className={`flex cursor-pointer items-center space-x-1 ${
                activeSeries.Expenses ? "" : "opacity-50"
              }`}
              onClick={() => toggleSeries("Expenses")}
            >
              <span className="h-2 w-2 rounded-full bg-cyanBlue"></span>
              <span className="text-xs font-medium text-neutral-400">
                Expenses
              </span>
            </span>
            <div className="Shadowmonth flex items-center justify-center gap-3 rounded bg-neutral-700 p-[9px] text-neutral-400">
              <div className="flex items-center gap-1">
                <CalenderIcon />
                <p className="text-[10px] font-medium">Jan 2024 - Dec 2024</p>
              </div>
              <MdKeyboardArrowDown />
            </div>
          </div>
        </div>
        <div className="h-full w-full">
          <Chart options={options} series={series} type="line" height={520} />
        </div>
      </div>
    </>
  );
};

export default RevenueExpensesChart;
