import { TABS } from "@/redux/layout/interface";

export interface MenuItem {
  title: string;
  icon: string;
  tooltip: string;
  tabName: TABS.ANALYTICS | TABS.HOLIDAY | TABS.JOBS | TABS.BLOG;
}

const menuItems: MenuItem[] = [
  {
    title: "Dashboard",
    icon: "fi fi-sr-apps-add",
    tooltip: "Home Section",
    tabName: TABS.ANALYTICS,
  },
  {
    title: "Holiday",
    icon: "fi fi-sr-umbrella-beach",
    tooltip: "Holiday Section",
    tabName: TABS.HOLIDAY,
  },
  {
    title: "Jobs",
    icon: "fi fi-sr-briefcase",
    tooltip: "Job Section",
    tabName: TABS.JOBS,
  },
  {
    title: "Blog",
    icon: "fi fi-sr-radio",
    tooltip: "Blog Section",
    tabName: TABS.BLOG,
  },
];

export default menuItems;
