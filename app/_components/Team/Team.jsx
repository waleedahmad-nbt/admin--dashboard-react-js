"use client";
import React from "react";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";

const Team = () => {
  return (
    <>
      <h2 className="text-base font-medium">Team information</h2>
      <p className="text text-sm font-medium text-neutral-400">
        Lorem ipsum dolor sit amet consectetur adipiscing.
      </p>

      <div className="mt-[26px] rounded-xl border border-darkGray bg-neutral-600 p-[34px]">
        <form>
          {/* Full Name Field */}
          <div className="mb-6 flex justify-between border-b border-darkGray pb-6">
            <label
              className="mb-2 flex items-center whitespace-nowrap text-xs font-medium"
              htmlFor="number"
            >
              <FaPhone className="mr-2" /> Team Name
            </label>
            <input
              type="text"
              id="number"
              placeholder="(123) 456 - 7890"
              className="h-[42px] w-full max-w-[365px] rounded border border-darkGray bg-transparent px-3 text-xs font-medium text-neutral-400 outline-none"
            />
          </div>

          {/* Email Field */}
          <div className="mb-6 flex justify-between border-b border-darkGray pb-6">
            <label
              className="mb-2 flex items-center whitespace-nowrap text-xs font-medium"
              htmlFor="position"
            >
              <FaEnvelope className="mr-2 inline" /> Rank
            </label>
            <input
              type="text"
              id="position"
              placeholder="CEO & Founder"
              className="h-[42px] w-full max-w-[365px] rounded border border-darkGray bg-transparent px-3 text-xs font-medium text-neutral-400 outline-none"
            />
          </div>
          <div className="mb-6 flex justify-between border-b border-darkGray pb-6">
            <label
              className="mb-2 flex items-center whitespace-nowrap text-xs font-medium"
              htmlFor="location"
            >
              <FaLocationDot className="mr-2 inline" /> Office
            </label>
            <input
              type="text"
              id="location"
              placeholder="New York, NY"
              className="h-[42px] w-full max-w-[365px] rounded border border-darkGray bg-transparent px-3 text-xs font-medium text-neutral-400 outline-none"
            />
          </div>
          <div className="flex justify-between">
            <label
              className="mb-2 flex items-center whitespace-nowrap text-xs font-medium"
              htmlFor="website"
            >
              <CiGlobe className="mr-2 inline text-base" /> mail
            </label>
            <input
              type="text"
              id="website"
              placeholder="dashdark.com"
              className="h-[42px] w-full max-w-[365px] rounded border border-darkGray bg-transparent px-3 text-xs font-medium text-neutral-400 outline-none"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Team;
