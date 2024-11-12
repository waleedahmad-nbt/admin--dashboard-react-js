"use client";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const HalfDonutChart = () => {
  const [series, setSeries] = useState([100, 90, 80]);
  const [options, setOptions] = useState({
    chart: {
      height: 250,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 100,
        size: "0%",
        hollow: {
          size: "60%",
        },
        track: {
          background: "#0B1739", // Darker background track
          strokeWidth: "100%",
        },
        dataLabels: {
          show: true,
          name: {
            show: false,
          },
          value: {
            fontSize: "24px",
            color: "#fff", // White text for value
            fontWeight: 600,
            offsetY: 10,
          },
        },
      },
    },
    colors: ["#CB3CFF", "#0E43FB", "#00C2FF"],
    labels: ["Organic", "Social", "Direct"],
  });
  return (
    <>
      <div className="w-full rounded-lg bg-neutral-600 p-4 text-white lg:h-[460px] lg:p-6">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-base font-medium">Website Visitors</h3>
          </div>
          <div className="Shadowmonth flex cursor-pointer items-center justify-center gap-3 rounded bg-neutral-700 p-[9px]">
            <p className="text-xs font-medium">Export </p>
          </div>
        </div>
        <ReactApexChart
          options={options}
          series={series}
          type="radialBar"
          height={250}
        />
        <div className="mt-6 space-y-7 text-sm text-neutral-400">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: "#CB3CFF" }}
              ></span>
              Organic
            </span>
            <span className="font-medium text-white">30%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: "#0E43FB" }}
              ></span>
              Social
            </span>
            <span className="font-medium text-white">50%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: "#00C2FF" }}
              ></span>
              Direct
            </span>
            <span className="font-medium text-white">20%</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HalfDonutChart;
