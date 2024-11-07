import React from "react";

const CompleteIcon = () => {
  return (
    <>
      <svg
        width="20"
        height="20"
        viewBox="0 0 14 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_4957_55951)">
          <rect y="0.59375" width="12" height="12" rx="2" fill="#CB3CFF" />
          <rect
            x="0.3"
            y="0.89375"
            width="11.4"
            height="11.4"
            rx="1.7"
            stroke="#CB3CFF"
            strokeWidth="0.6"
          />
        </g>
        <g clipPath="url(#clip0_4957_55951)">
          <path
            d="M3.99683 6.50983H8.19683"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_4957_55951"
            x="0"
            y="0.59375"
            width="14"
            height="14"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="1" dy="1" />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.06125 0 0 0 0 0.0969792 0 0 0 0 0.204167 0 0 0 0.4 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_4957_55951"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_4957_55951"
              result="shape"
            />
          </filter>
          <clipPath id="clip0_4957_55951">
            <rect
              width="5.6"
              height="5.6"
              fill="white"
              transform="translate(3.29688 3.79395)"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default CompleteIcon;
