"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
const WebsiteVisitors = () => {
  const deviceData = [
    { label: "Sell", count: 20, color: "#CB3CFF" },
    { label: "Distribute", count: 80, color: "#0038FF" },
    { label: "Return", count: 24, color: "#00C2FF" },
  ];

  const totalUsers = deviceData.reduce((acc, device) => acc + device.count, 0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const [options, setOptions] = useState({
    chart: {
      type: "donut",
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 1000,
      },
      events: {
        dataPointMouseEnter: (event, chartContext, { dataPointIndex }) => {
          setHoveredIndex(dataPointIndex);
        },
        dataPointMouseLeave: () => {
          setHoveredIndex(null);
        },
      },
    },
    colors: deviceData.map((device) => device.color),
    plotOptions: {
      pie: {
        startAngle: -100,
        endAngle: 90,
        expandOnClick: true,
        donut: {
          size: "90%",
        },
      },
    },
    stroke: {
      show: true,
      width: 0, // Remove border width
      colors: ["transparent"], // Set border color to transparent
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: true,
      formatter: (val, opts) => {
        const index = opts.dataPointIndex;
        return `${deviceData[index].label}: ${deviceData[index].count.toLocaleString()}`;
      },
    },
    legend: {
      show: false,
    },
  });

  const series = deviceData.map((device) => device.count);
  return (
    <>
      <div className="h-full w-full rounded-xl bg-neutral-600 p-2 text-white shadow-md md:p-4 lg:p-[30px]">
        <h2 className="mb-7 text-start text-base font-medium">
          Website Visitors
        </h2>
        <div className="relative mb-4 flex justify-center">
          <Chart options={options} series={series} type="donut" height="180" />
          <div className="absolute top-14 text-center">
            <div className="text-4xl font-semibold">
              {hoveredIndex !== null
                ? deviceData[hoveredIndex].count.toLocaleString()
                : totalUsers.toLocaleString()}
            </div>
            <div className="text-sm text-gray-400">
              {hoveredIndex !== null
                ? deviceData[hoveredIndex].label
                : "Transactions"}
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-between text-sm">
          {deviceData.map((device, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span
                  className="inline-block h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: device.color }}
                ></span>
                <span className="text-neutral-400">{device.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WebsiteVisitors;
