import Image from "next/image";
import React from "react";

const SearchInput = ({ width = "100%", height = "42px" }) => {
  return (
    <>
      <div className="relative" style={{ width }}>
        <input
          type="search"
          name="search"
          id="search"
          className="h-[42px] w-full rounded border border-darkGray bg-neutral-600 ps-9 text-xs text-neutral-400 outline-none"
          placeholder="Search for..."
          style={{ height }}
        />
        <div className="absolute left-[14px] top-[14px]">
          <Image
            width={13}
            height={13}
            src="/images/Search.svg"
            alt="search"
            className="h-full w-full"
          />
        </div>
      </div>
    </>
  );
};

export default SearchInput;
