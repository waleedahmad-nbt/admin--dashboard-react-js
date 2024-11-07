"use client";
import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { motion } from "framer-motion";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const countriesData = [
  { name: "United States", coordinates: [-100.0, 40.0], value: 30 },
  { name: "United Kingdom", coordinates: [-1.5, 52.0], value: 20 },
  { name: "Canada", coordinates: [-106.3, 56.1], value: 20 },
  { name: "Australia", coordinates: [133.8, -25.3], value: 15 },
  { name: "Spain", coordinates: [-3.7, 40.5], value: 15 },
];
const UsersbyCountry = () => {
  return (
    <>
      <div className="mt-6 rounded-lg bg-neutral-600 p-6 text-white">
        <h2 className="mb-4 text-lg font-bold">Users by country</h2>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">12.4K</span>
          <button className="bg-dark-700 rounded px-3 py-1">Export ⬇️</button>
        </div>
        <ComposableMap
          projectionConfig={{ scale: 150 }}
          width={800}
          height={400}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  className="fill-dark-600 stroke-dark-500"
                />
              ))
            }
          </Geographies>
          {countriesData.map(({ coordinates, name, value }) => (
            <motion.circle
              key={name}
              cx={coordinates[0]}
              cy={coordinates[1]}
              r="8"
              fill="cyan"
              className="pulse"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          ))}
        </ComposableMap>
      </div>
    </>
  );
};

export default UsersbyCountry;
