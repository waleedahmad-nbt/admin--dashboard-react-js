"use client";
import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import ArrowIcon from "../Icons/ArrowIcon";

const geoUrl =
  "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";

const usersByCountry = [
  {
    name: "United States",
    coordinates: [-100, 40],
    users: "3.9K",
    percentage: 60,
    color: "bg-primary-1",
  },
  {
    name: "Nigeria",
    coordinates: [8.6753, 9.082],
    users: "2.5K",
    percentage: 40,
    color: "bg-neutral-500",
  },
  {
    name: "Canada",
    coordinates: [-106.3468, 56.1304],
    users: "2.0K",
    percentage: 30,
    color: "bg-Purple",
  },
  {
    name: "Australia",
    coordinates: [133.7751, -25.2744],
    users: "1.8K",
    percentage: 70,
    color: "bg-cyanBlue",
  },
  {
    name: "Spain",
    coordinates: [-3.7038, 40.4168],
    users: "1.5K",
    percentage: 36,
    color: "bg-neutral-200",
  },
];

const WorldMap = () => {
  return (
    <div className="mt-6 flex flex-col space-x-8 rounded-lg bg-neutral-600 p-6 text-white md:flex-row">
      {/* Sidebar */}
      <div className="md:w-1/3">
        <h2 className="text-base font-medium">Users by country</h2>
        <div className="flex items-center gap-1.5">
          <h1 className="text-2xl font-semibold">12.4 K</h1>
          <p className="flex h-[18px] items-center justify-center rounded-sm border border-success-light bg-success-light px-1 py-0.5 text-[10px] font-medium text-success">
            28.4%
            <ArrowIcon />
          </p>
        </div>
        <div className="mt-5 space-y-2">
          {usersByCountry.map((country, index) => (
            <div key={index}>
              <p className="text-xs font-normal text-neutral-400">
                {country.name}
              </p>
              <div className="flex items-center justify-between">
                {/* Progress bar with dynamic width and color */}
                <div className="relative h-1 w-[140px] rounded-md bg-transparent">
                  <div
                    className={`h-full rounded-md ${country.color}`}
                    style={{ width: `${country.percentage}%` }}
                  ></div>
                </div>
                <span className="ml-2">{country.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="relative md:w-3/4" style={{ height: "360px" }}>
        <ComposableMap
          projectionConfig={{ scale: 200 }}
          width={800}
          height={360}
          style={{ width: "100%", height: "100%" }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#1F2A38"
                  stroke="#333E50"
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>
          {usersByCountry.map((country, index) => (
            <Marker key={index} coordinates={country.coordinates}>
              <circle r={8} fill="#6e2d9e" />
              <circle r={4} fill="#311e60" />
            </Marker>
          ))}
        </ComposableMap>
      </div>
    </div>
  );
};

export default WorldMap;
