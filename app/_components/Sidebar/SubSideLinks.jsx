"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidelink = ({ href, children }) => {
  const pathname = usePathname();
  // const isActive = pathname === href;
  const isActive = pathname.startsWith(href);

  const liClasses = `flex h-[42px] items-center rounded text-sm font-medium ${
    isActive ? "bg-neutral-700 text-white" : "text-neutral-400"
  }`;

  return (
    <Link href={href}>
      <li className={liClasses}>
        {/* Left active line */}
        <p
          className={`h-[42px] w-1 rounded-l ${isActive ? "bg-primary-1" : "bg-transparent"}`}
        ></p>

        {/* Link */}
        <p className="w-full pl-2">{children}</p>
      </li>
    </Link>
  );
};

export default Sidelink;
