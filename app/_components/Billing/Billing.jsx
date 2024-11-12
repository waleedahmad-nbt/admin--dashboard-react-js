"use client";
import React, { useState } from "react";
import VisaIcon from "../Icons/VisaIcon";
import MasterIcon from "../Icons/MasterIcon";
import AmexIcon from "../Icons/AmexIcon";
import { RxCross2 } from "react-icons/rx";
import {
  FaCirclePlus,
  FaEnvelope,
  FaLocationDot,
  FaUser,
} from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";

const Billing = () => {
  const [selectedMethod, setSelectedMethod] = useState(0);

  const paymentMethods = [
    {
      id: 0,
      icon: <VisaIcon />,
      type: "Visa",
      number: "**** 8092",
      expiry: "Expires on 12/26",
    },
    {
      id: 1,
      icon: <MasterIcon />,
      type: "Mastercard",
      number: "**** 8092",
      expiry: "Expires on 12/26",
    },
    {
      id: 2,
      icon: <AmexIcon />,
      type: "American Express",
      number: "**** 8092",
      expiry: "Expires on 12/26",
    },
  ];

  return (
    <>
      <div className="mb-28">
        <h2 className="text-base font-medium">Payment methods</h2>
        <p className="text text-sm font-medium text-neutral-400">
          Lorem ipsum dolor sit amet consectetur adipiscing.
        </p>

        <div className="mt-6 rounded-xl border border-darkGray bg-neutral-600 p-3 md:p-5 lg:p-7">
          {/* Payment Method */}
          <div>
            {paymentMethods.map((method, index) => (
              <div
                key={method.id}
                onClick={() => setSelectedMethod(index)}
                className={`mb-1.5 flex cursor-pointer items-center justify-between rounded-lg border p-3 ${
                  selectedMethod === index
                    ? "border-[#575DFFCC] bg-[#1D2650]"
                    : "border-darkGray hover:bg-[#1D2650]"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    checked={selectedMethod === index}
                    readOnly
                    className="rounded-full border border-darkGray bg-neutral-600 accent-primary-1"
                  />

                  <span className="text-base font-medium">{method.icon}</span>
                  <div>
                    <p className="text-sm font-medium">
                      {method.type} {method.number}
                    </p>
                    <p className="text-xs text-neutral-400">{method.expiry}</p>
                  </div>
                </div>
                <button className="text-neutral-400 hover:text-red-500">
                  <RxCross2 />
                </button>
              </div>
            ))}
            <button className="mt-3 flex items-center space-x-2 text-start font-medium text-neutral-400">
              <FaCirclePlus />
              <span>Add a new payment method</span>
            </button>
          </div>

          {/* Billing Address Section */}
          <div className="mt-16">
            <h2 className="text-base font-medium">Billing address</h2>
            <p className="text text-sm font-medium text-neutral-400">
              Lorem ipsum dolor sit amet consectetur adipiscing.
            </p>
            <form className="mt-9">
              {/* Full Name Field */}
              <div className="mb-6 flex flex-col justify-between border-b border-darkGray pb-6 lg:flex-row">
                <label
                  className="mb-2 flex items-center whitespace-nowrap text-xs font-medium"
                  htmlFor="name"
                >
                  <FaUser className="mr-2" /> Full name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Carter"
                  className="h-[42px] w-full max-w-[365px] rounded border border-darkGray bg-transparent px-3 text-xs font-medium text-neutral-400 outline-none"
                />
              </div>

              {/* Email Field */}
              <div className="mb-6 flex flex-col justify-between border-b border-darkGray pb-6 lg:flex-row">
                <label
                  className="mb-2 flex items-center whitespace-nowrap text-xs font-medium"
                  htmlFor="address"
                >
                  <FaEnvelope className="mr-2 inline" /> Address
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="601 4th St #103"
                  className="h-[42px] w-full max-w-[365px] rounded border border-darkGray bg-transparent px-3 text-xs font-medium text-neutral-400 outline-none"
                />
              </div>
              <div className="mb-6 flex flex-col justify-between border-b border-darkGray pb-6 lg:flex-row">
                <label
                  className="mb-2 flex items-center whitespace-nowrap text-xs font-medium"
                  htmlFor="location"
                >
                  <FaLocationDot className="mr-2 inline" /> State
                </label>
                <input
                  type="text"
                  id="location"
                  placeholder="Los Angeles"
                  className="h-[42px] w-full max-w-[365px] rounded border border-darkGray bg-transparent px-3 text-xs font-medium text-neutral-400 outline-none"
                />
              </div>
              <div className="flex flex-col justify-between lg:flex-row">
                <label
                  className="mb-2 flex items-center whitespace-nowrap text-xs font-medium"
                  htmlFor="website"
                >
                  <CiGlobe className="mr-2 inline text-base" /> Zip code
                </label>
                <input
                  type="text"
                  id="website"
                  placeholder="63000"
                  className="h-[42px] w-full max-w-[365px] rounded border border-darkGray bg-transparent px-3 text-xs font-medium text-neutral-400 outline-none"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Billing;
