"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const page = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/add-users/personal-information");
  }, [router]);

  return null;
};
export default page;
