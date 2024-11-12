import React from "react";
import { HiMiniPencil } from "react-icons/hi2";
import Navlink from "../Navlink/Navlink";
import { FaUser } from "react-icons/fa6";
import CardIcon from "../Icons/CardIcon";
import { IoIosNotifications } from "react-icons/io";

const CredentialsSidebar = () => {
  return (
    <div className="border-darkGray md:border-r">
      <div className="mr-5 md:w-[250px] lg:mr-[52px]">
        <h3 className="text-base font-medium">Credentials</h3>
        <ul className="mt-6 space-y-2">
          <Navlink href="/add-users/personal-information">
            <div className="flex items-center gap-2">
              <HiMiniPencil />
              <p className="text-sm font-medium">Personal Information</p>
            </div>
          </Navlink>
          <Navlink href="/add-users/team">
            <div className="flex items-center gap-2">
              <FaUser />
              <p className="text-sm font-medium">Team</p>
            </div>
          </Navlink>
          <Navlink href="/add-users/billing">
            <div className="flex items-center gap-2">
              <CardIcon />
              <p className="text-sm font-medium">Billing</p>
            </div>
          </Navlink>
          <Navlink href="/add-users/notifications">
            <div className="flex items-center gap-2">
              <IoIosNotifications />
              <p className="text-sm font-medium">Notifications</p>
            </div>
          </Navlink>
        </ul>
      </div>
    </div>
  );
};

export default CredentialsSidebar;
