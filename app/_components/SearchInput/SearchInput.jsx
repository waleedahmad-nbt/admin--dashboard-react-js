import Image from "next/image";
import React from "react";

const SearchInput = ({ width = "100%", height = "42px" }) => {
  return (
    <div
      style={{ width }}
      className="flex items-center rounded border border-darkGray bg-neutral-600"
    >
      <div className="px-3">
        <Image
          width={13}
          height={13}
          src="/images/Search.svg"
          alt="search"
          className="h-full w-full"
        />
      </div>
      <input
        type="search"
        name="search"
        id="search"
        className="z-10 w-full bg-neutral-600 text-xs text-neutral-400 outline-none"
        placeholder="Search for..."
        style={{ height }}
      />
    </div>
  );
};

export default SearchInput;
