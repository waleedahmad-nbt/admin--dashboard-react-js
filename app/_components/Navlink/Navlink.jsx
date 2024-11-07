"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive =
    pathname === href ||
    (pathname === "/add-users" && href === "/add-users/personal-information");

  const liClasses = `flex h-[42px] mt-2 cursor-pointer items-center gap-2 rounded-lg px-3 ${
    isActive ? "bg-neutral-700 text-white" : "text-neutral-400"
  }`;

  return (
    <Link href={href}>
      <li className={liClasses}>{children}</li>
    </Link>
  );
};

export default Navlink;
