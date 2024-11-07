import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const VisitorChart = () => {
  const chartData = {
    series: [30, 50, 20], // Percentage values
    options: {
      chart: {
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "70%",
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              fontSize: "24px",
            },
          },
          track: {
            background: "#2c2c54",
            strokeWidth: "100%",
          },
        },
      },
      colors: ["#d1a1fc", "#5c75fb", "#00e396"], // Colors for each segment
      labels: ["Organic", "Social", "Direct"], // Labels for the legend
    },
  };

  return (
    <div className="h-[460px] w-[341px] rounded-md bg-neutral-600 p-4 text-white">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Website Visitors</h2>
        <button className="flex items-center text-xs">
          Export
          <span className="ml-1">⬇️</span>
        </button>
      </div>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="radialBar"
        height="250"
      />
      <div className="mt-4 space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-[#d1a1fc]"></span>
            <span>Organic</span>
          </span>
          <span>30%</span>
        </div>
        <div className="flex justify-between">
          <span className="flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-[#5c75fb]"></span>
            <span>Social</span>
          </span>
          <span>50%</span>
        </div>
        <div className="flex justify-between">
          <span className="flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-[#00e396]"></span>
            <span>Direct</span>
          </span>
          <span>20%</span>
        </div>
      </div>
    </div>
  );
};

export default VisitorChart;
