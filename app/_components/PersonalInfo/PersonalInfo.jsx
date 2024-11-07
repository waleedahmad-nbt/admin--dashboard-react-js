"use client";
import React, { useState } from "react";
import {
  FaEnvelope,
  FaImage,
  FaLocationDot,
  FaPhone,
  FaUser,
} from "react-icons/fa6";
import Image from "next/image";
import { CiGlobe } from "react-icons/ci";

const PersonalInfo = () => {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false); // Track if a file is being dragged over

  // Handle image change from input
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // Handle drag over to enable drop and show dashed border
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true); // Set dragging state to true
  };

  // Handle drag leave to remove dashed border
  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false); // Set dragging state to false
  };

  // Handle file drop and remove dashed border
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false); // Remove dashed border after drop
    const file = e.dataTransfer.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // Handle delete image
  const handleImageDelete = () => {
    setImage(null);
    setImagePreview(null);
  };
  return (
    <>
      <div className="mb-24">
        <h2 className="text-base font-medium">Personal Information</h2>
        <p className="text text-sm font-medium text-neutral-400">
          Lorem ipsum dolor sit amet consectetur adipiscing.
        </p>
        <div className="mt-[26px] rounded-xl border border-darkGray bg-neutral-600 p-[34px]">
          <form>
            {/* Full Name Field */}
            <div className="mb-6 flex justify-between border-b border-darkGray pb-6">
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
            <div className="mb-6 flex justify-between border-b border-darkGray pb-6">
              <label
                className="mb-2 flex items-center whitespace-nowrap text-xs font-medium"
                htmlFor="email"
              >
                <FaEnvelope className="mr-2 inline" /> Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="john@dashdark.com"
                className="h-[42px] w-full max-w-[365px] rounded border border-darkGray bg-transparent px-3 text-xs font-medium text-neutral-400 outline-none"
              />
            </div>

            {/* Photo Upload */}
            <div className="flex border-b border-darkGray pb-6">
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="w-[30%] text-left">
                      <label className="mb-2 flex items-center whitespace-nowrap text-xs font-medium">
                        <FaImage className="mr-2 inline" /> Photo
                      </label>
                    </td>
                    <td className="w-[70%] text-right">
                      <div
                        className={`flex space-x-4 ${
                          isDragging
                            ? "rounded-xl border-2 border-dashed border-primary-1 bg-neutral-700 px-1"
                            : ""
                        }`} // Apply dashed border when dragging
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                        onDragLeave={handleDragLeave}
                      >
                        <div className="flex min-h-[127px] w-full items-center">
                          {/* Show uploaded image preview if available */}
                          {imagePreview ? (
                            <div className="relative">
                              <div className="size-16">
                                <Image
                                  width={50}
                                  height={50}
                                  unoptimized
                                  src={imagePreview}
                                  alt="Profile Preview"
                                  className="size-16 rounded-full object-cover"
                                />
                              </div>
                              <p
                                onClick={handleImageDelete}
                                className="mt-2 cursor-pointer text-center text-xs font-medium text-neutral-400"
                              >
                                Delete
                              </p>
                            </div>
                          ) : null}

                          {/* Always show the file input */}
                          <label
                            htmlFor="file-upload"
                            className="flex w-full cursor-pointer flex-col items-center text-center"
                          >
                            <Image
                              width={32}
                              height={32}
                              unoptimized
                              src="/images/Group 1000005456.svg"
                              alt="image"
                            />
                            <span className="mt-3 text-xs">
                              <span className="text-primary-1">
                                {" "}
                                Click to upload{" "}
                              </span>{" "}
                              or drag and drop
                            </span>
                            <input
                              type="file"
                              id="file-upload"
                              accept="image/*"
                              onChange={handleImageChange}
                              className="hidden"
                            />
                            <p className="mt-1 text-xs">
                              SVG, PNG, JPG or GIF (max. 800 x 400px)
                            </p>
                          </label>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Short Description Field */}
            <div className="mt-6 flex justify-between">
              <label
                className="mb-2 flex items-center whitespace-nowrap text-xs font-medium"
                htmlFor="bio"
              >
                <FaUser className="mr-2 inline" /> Short description
              </label>
              <textarea
                id="bio"
                placeholder="Write a short bio about you..."
                className="h-24 w-full max-w-[365px] rounded border border-darkGray bg-transparent p-3 text-xs font-medium text-neutral-400 outline-none"
              />
            </div>
          </form>
        </div>
        <div className="mt-12">
          <h2 className="text-base font-medium">Basic information</h2>
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
                  <FaPhone className="mr-2" /> Phone
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
                  <FaEnvelope className="mr-2 inline" /> Position
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
                  <FaLocationDot className="mr-2 inline" /> Location
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
                  <CiGlobe className="mr-2 inline" /> Website
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
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
