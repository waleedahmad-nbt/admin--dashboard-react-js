import DashboardIcon from "../_components/Icons/DashboardIcon";
import IntegrationIcon from "../_components/Icons/IntegrationIcon";
import PricingIcon from "../_components/Icons/PricingIcon";
import { SettingIcon } from "../_components/Icons/SettingIcon";
import StarIcon from "../_components/Icons/StarIcon";
import TempIcon from "../_components/Icons/TempIcon";
import UserIcon from "../_components/Icons/UserIcon";

export const menuItems = [
  {
    label: "Dashboard",
    icon: <DashboardIcon />,
    subitems: [
      { label: "All pages", link: "/dashboard/all-pages" },
      { label: "Reports", link: "/analytics" },
      { label: "Products", link: "/dashboard/products" },
      { label: "Analytics2", link: "/dashboard/reports" },
    ],
  },
  {
    label: "Features",
    icon: <StarIcon />,
    subitems: [
      { label: "All pages", link: "/analytics" },
      { label: "Contacts", link: "/dashboard/kanban" },
      { label: "Companies", link: "/analytics" },
      { label: "Tasks", link: "/analytics" },
      { label: "Board", link: "/dashboard/kanban" },
      { label: "Table", link: "/analytics" },
      { label: "Calendar", link: "/calender" },
      { label: "Chat", link: "/chat" },
    ],
  },
  {
    label: "Users",
    icon: <UserIcon />,
    subitems: [
      { label: "All Users", link: "/users" },
      { label: "Add Users", link: "/add-users" },
    ],
  },
  {
    label: "Pricing",
    icon: <PricingIcon />,
    subitems: [{ label: "Add Users", link: "/users/add-users" }],
  },
  {
    label: "Integrations",
    icon: <IntegrationIcon />,
    subitems: [{ label: "Item 1", link: "/dashboard/kanban" }],
  },
];

export const settingsItems = [
  {
    label: "Settings",
    icon: <SettingIcon />,
    subitems: [
      { label: "All pages", link: "/analytics" },
      { label: "Contacts", link: "/dashboard/kanban" },
      { label: "Companies", link: "/analytics" },
      { label: "Tasks", link: "/analytics" },
      { label: "Board", link: "/dashboard/kanban" },
      { label: "Table", link: "/analytics" },
      { label: "Calendar", link: "/calender" },
      { label: "Chat", link: "/chat" },
    ],
  },
  {
    label: "Template pages",
    icon: <TempIcon />,
    subitems: [
      { label: "All pages", link: "/dashboard/all-pages" },
      { label: "Reports", link: "/analytics" },
      { label: "Products", link: "/dashboard/products" },
      { label: "Task", link: "/dashboard/reports" },
    ],
  },
];
