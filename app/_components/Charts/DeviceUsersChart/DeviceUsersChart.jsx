"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const DeviceUsersChart = () => {
  const deviceData = [
    { label: "Desktop users", count: 15624, color: "#CB3CFF" },
    { label: "Phone app users", count: 5546, color: "#0038FF" },
    { label: "Laptop users", count: 2478, color: "#00C2FF" },
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
      <div className="flex h-full w-full flex-col items-center justify-center rounded-xl bg-neutral-600 p-6 text-white shadow-md">
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
                : "Users by device"}
            </div>
          </div>
        </div>
        <div className="w-full space-y-4 text-sm">
          {deviceData.map((device, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span
                  className="inline-block h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: device.color }}
                ></span>
                <span className="text-neutral-400">{device.label}</span>
              </div>
              <span className="text-neutral-200">
                {device.count.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DeviceUsersChart;
